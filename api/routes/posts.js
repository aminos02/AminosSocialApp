const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//CREATE a POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    return res.status(200).json("Post Created");
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

//UPDATE a POST
router.put("/:id", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    if (targetPost.userId === req.body.userId || req.body.isAdmin) {
      await targetPost.updateOne({ $set: req.body });
      return res.status(200).json("updated successfelly ");
    } else {
      return res.status(403).json("You can update only your post");
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
//DELETE a POST

router.delete("/:id", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);
    if (targetPost.userId === req.body.userId || req.body.isAdmin) {
      console.log("Yes");
      await targetPost.deleteOne();
      return res.status(200).json("removed successfelly ");
    } else {
      return res.status(403).json("You can remove only your post");
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

//LIKE a POST

router.put("/:id/like", async (req, res) => {
  try {
    const targetPost = await Post.findById(req.params.id);

    if (!targetPost.likes.includes(req.body.userId)) {
      await targetPost.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json("liked successfelly ");
    } else {
      await targetPost.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json("disliked successfelly ");
    }
  } catch (err) {
    return res.status(500).json(err.message);

    //return res.status(500).json(err.message);
  }
});

//GET a POST

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});
//GET TIMELINE POSTs
router.get("/timeline/all", async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: user._id });
    const freindPosts = await Promise.all(
      user.followings.map((freindId) => {
        return Post.find({ userId: freindId });
      })
    );
    res.status(200).json(userPosts.concat(...freindPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});
/*
router.post("/timeline", async (req, res) => {
  console.log("HELLO WORLD");
  /*try {
    /*const user = await User.findById(req.body.userId);
    const timeline = [];
    const followings = user.followings;*/
/*followings.forEach(async (follower) => {
      await Post.findById(follower);
      timeline.push(newPost);
    });

    return res.status(200).json(timeline);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});*/
module.exports = router;
