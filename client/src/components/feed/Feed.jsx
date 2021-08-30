import React from "react";
import "./feed.css";
import ShareItem from "./ShareItem";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <ShareItem />
      <Post
        person_img={"/assets/person/1.jpeg"}
        big_img={"/assets/post/1.jpeg"}
        name={"Janell Shrum"}
        time={"15 mins ago"}
        text={""}
        like={"20"}
        comments={"15"}
      />
      <Post
        person_img={"/assets/person/2.jpeg"}
        big_img={"/assets/post/2.jpeg"}
        name={"Mohammed"}
        time={"20 mins ago"}
        text={""}
        like={"20"}
        comments={"12"}
      />
      <Post
        person_img={"/assets/person/3.jpeg"}
        big_img={"/assets/post/3.jpeg"}
        name={"Janell Shrum"}
        time={"22 mins ago"}
        text={""}
        like={"11"}
        comments={"01"}
      />
    </div>
  );
}

export default Feed;
