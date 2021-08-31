import React from "react";
import { MoreVert } from "@material-ui/icons";
import "./post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Users } from "../../dummyData";

function Post({ photo, date, desc, like, comment, userId, id }) {
  const [likes, setLikes] = React.useState(like);
  const [isLike, setIsLike] = React.useState(false);
  const toggleLike = () => {
    isLike ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsLike(!isLike);
  };

  const user = Users.find((e) => e.id === userId);
  return (
    <div className="post">
      <div className="post__header">
        <div className="left__header">
          <img
            src={"/assets/" + user.profilePicture}
            alt="person"
            className="navBar__img post__header__img"
          ></img>
          <h4>{user.username}</h4>
          <p>{date}</p>
        </div>
        <div className="right__header">
          <MoreVert />
        </div>
      </div>
      <p>{desc}</p>
      <img
        src={`/assets/${photo}`}
        className="post__big__img"
        alt=""
        data-scroll-zoom
      />
      <div className="post__footer">
        <div className="post__footer__icons">
          <div
            onClick={toggleLike}
            className="post__icon"
            style={{ background: "var(--clr-primary-5)" }}
          >
            <ThumbUpAltIcon style={{ color: "white" }} />
          </div>
          <div
            onClick={toggleLike}
            className="post__icon"
            style={{ background: "#f66767" }}
          >
            <FavoriteIcon style={{ color: "white" }} />
          </div>
          <p>{like ? likes : 0} people like it</p>
        </div>
        <p>{comment ? comment : 0} Comments</p>
      </div>
    </div>
  );
}

export default Post;
