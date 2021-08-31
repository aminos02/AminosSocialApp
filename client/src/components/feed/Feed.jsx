import React from "react";
import "./feed.css";
import ShareItem from "./ShareItem";
import Post from "./Post";
import { Posts } from "../../dummyData";
function Feed() {
  return (
    <div className="feed">
      <ShareItem />
      {Posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}

export default Feed;
