const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
router.get("/", async (req, res) => {
  res.send("Authentication");
});

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(11);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = await new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
  });
  try {
    const newUser_response = await newUser.save();
    res.status(200).send(newUser_response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User Not Found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong Password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
