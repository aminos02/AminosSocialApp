import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Navbar() {
  return (
    <div className="navBar">
      <div className="navBar__logo">
        <h1>Aminos Social</h1>
      </div>
      <div className="navBar__searchContainer">
        <div className="navBar__searchIcon">
          <SearchIcon />
        </div>
        <input
          className="navBar_searchInput"
          type="text"
          placeholder="Search for friend, post or video"
        />
      </div>
      <div className="navBar__link">
        <h4>Home Page</h4>
        <h4>Timeline</h4>
      </div>
      <div className="navBar__icons">
        <div className="navBar__icon">
          <AccountCircleIcon />
          <span className="navBar__counter">1</span>
        </div>
        <div className="navBar__icon">
          <MessageIcon />
          <span className="navBar__counter">1</span>
        </div>
        <div className="navBar__icon">
          <NotificationsIcon />
          <span className="navBar__counter">1</span>
        </div>
      </div>
      <img
        src="/assets/person/1.jpeg"
        alt="person"
        className="navBar__img"
      ></img>
    </div>
  );
}

export default Navbar;
