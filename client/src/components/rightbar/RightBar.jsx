import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="gift__container">
        <img src="/assets/gift.png" className="gift__img" alt="gift" />
        <span className="">
          <strong>Pola Foster</strong> and <strong>3 other freinds</strong> have
          a birthday today
        </span>
      </div>
      <img src="/assets/ad.png " className="rightbar__ad" alt="AD" />
      <h3 style={{ margin: "1rem 0" }}>Online freinds</h3>
      {Users.map((u) => (
        <Freind key={u.id} {...u} />
      ))}
    </div>
  );
}
const Freind = ({ profilePicture, username }) => (
  <div className="rightbar__freind">
    <div className="rightbar__img__connected">
      <img
        src={"/assets/" + profilePicture}
        alt="person"
        className="connected__img"
      ></img>
      <span className="green__circle"></span>
    </div>
    <h4>{username}</h4>
  </div>
);

export default RightBar;
