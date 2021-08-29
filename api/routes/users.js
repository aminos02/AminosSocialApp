const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
/*GET USER*/

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

/*DELETE USER*/

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User has been removed");
    } catch (err) {
      return res.status(500).json(err.message);
    }
  } else {
    return res.status(403).json("You can delete only your account");
  }
});

/*UPDATE USER :: */

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err.message);
    }
  } else {
    return res.status(403).json("You can only update Your account");
  }
});

/*Follow USER*/
router.put("/:id/follow", async (req, res) => {
  if (req.params.id !== req.body.userId) {
    try {
      const target_user = await User.findById(req.params.id);
      const follower = await User.findById(req.body.userId);
      if (
        !target_user.followers.includes(req.body.userId) &&
        !follower.followings.includes(req.params.id)
      ) {
        await target_user.updateOne({ $push: { followers: req.body.userId } });
        await follower.updateOne({ $push: { followings: req.params.id } });
        return res.status(200).json("User Has been Followed");
      } else {
        return res.status(403).json("Your already Following this User");
      }
    } catch (err) {
      return res.status(403).json(err.message);
    }
  } else {
    return res.status(403).json("Cant follow Your self");
  }
});

/*UnFollow USER*/
router.put("/:id/unfollow", async (req, res) => {
  if (req.params.id !== req.body.userId) {
    try {
      const target_user = await User.findById(req.params.id);
      const follower = await User.findById(req.body.userId);

      if (
        target_user.followers.includes(req.body.userId) &&
        follower.followings.includes(req.params.id)
      ) {
        await target_user.updateOne({ $pull: { followers: req.body.userId } });
        await follower.updateOne({ $pull: { followings: req.params.id } });
        return res.status(200).json("User Has been UnFollowed");
      } else {
        return res.status(403).json("Your not Following this User");
      }
    } catch (err) {
      return res.status(403).json(err.message);
    }
  } else {
    return res.status(403).json("Cant Unfollow Your self");
  }
});
module.exports = router;
