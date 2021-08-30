import React from "react";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
function ShareItem() {
  return (
    <div className="shareItem">
      <div className="shareItem__header">
        <img
          src="/assets/person/1.jpeg"
          alt="person"
          className="shareItem__img"
        ></img>
        <input
          type="text"
          placeholder="What's in your mind Safak Kocaogulu?"
          className="shareItem__input"
        />
      </div>
      <hr></hr>
      <form className="shareItem__form">
        <label className="shareItemIcon">
          <PermMedia style={{ color: "orange" }} />
          <p>Photo or Video</p>
        </label>
        <label className="shareItemIcon">
          <Label style={{ color: "blue" }}></Label>
          <p>Tag</p>
        </label>
        <label className="shareItemIcon">
          <Room style={{ color: "green" }}></Room>
          <p>Location</p>
        </label>
        <label className="shareItemIcon">
          <EmojiEmotions style={{ color: "chocolate" }}></EmojiEmotions>
          <p>Feelings</p>
        </label>
        <button className="sharebtn">Share</button>
      </form>
    </div>
  );
}

export default ShareItem;
