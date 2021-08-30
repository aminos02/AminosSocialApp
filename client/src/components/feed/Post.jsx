import React from "react";
import { MoreVert } from "@material-ui/icons";
import "./post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Post({ person_img, big_img, time, name, text, like, comments }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="left__header">
          <img
            src={person_img}
            alt="person"
            className="navBar__img post__header__img"
          ></img>
          <h4>{name}</h4>
          <p>{time}</p>
        </div>
        <div className="right__header">
          <MoreVert />
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quia,
        harum expedita veniam dolorem illo itaque aut tempore consequuntur vel.
      </p>
      <img src={big_img} className="post__big__img" alt="" />
      <div className="post__footer">
        <div className="post__footer__icons">
          <div
            className="post__icon"
            style={{ background: "var(--clr-primary-5)" }}
          >
            <ThumbUpAltIcon style={{ color: "white" }} />
          </div>
          <div className="post__icon" style={{ background: "#f66767" }}>
            <FavoriteIcon style={{ color: "white" }} />
          </div>
          <p>{like} people like it</p>
        </div>
        <p>{comments} Comments</p>
      </div>
    </div>
  );
}

export default Post;
