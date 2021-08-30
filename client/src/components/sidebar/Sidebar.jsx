import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__element">
        <RssFeed fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Feed</h5>
      </div>
      <div className="sidebar__element">
        <Chat fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Chats</h5>
      </div>
      <div className="sidebar__element">
        <PlayCircleFilledOutlined
          fontSize="medium"
          className="sidebar__element__icon"
        />
        <h5 className="sidebar__element__title">Videos</h5>
      </div>
      <div className="sidebar__element">
        <Group fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Groups</h5>
      </div>
      <div className="sidebar__element">
        <Bookmark fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Bookmarks</h5>
      </div>
      <div className="sidebar__element">
        <HelpOutline fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Questions</h5>
      </div>
      <div className="sidebar__element">
        <WorkOutline fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Jobs</h5>
      </div>
      <div className="sidebar__element">
        <Event fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Events</h5>
      </div>
      <div className="sidebar__element">
        <School fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Courses</h5>
      </div>
      <div className="sidebar__element">
        <ExpandMoreIcon fontSize="medium" className="sidebar__element__icon" />
        <h5 className="sidebar__element__title">Show More</h5>
      </div>
      <hr className="sidebar__line" />
      <div className="sidebar__freinds">
        <Freind image={"/assets/person/1.jpeg"} name="Sara Loya" />
        <Freind image={"/assets/person/2.jpeg"} name="Moha Aso" />
        <Freind image={"/assets/person/3.jpeg"} name="Mimi Sghayra" />
        <Freind image={"/assets/person/11.jpg"} name="SA Lamer" />
        <Freind image={"/assets/person/4.jpeg"} name="Rahja Barhoucha" />
        <Freind image={"/assets/person/4.jpeg"} name="Rahja Barhoucha" />
        <Freind image={"/assets/person/4.jpeg"} name="Rahja Barhoucha" />
      </div>
    </div>
  );
}

const Freind = ({ image, name }) => (
  <div className="freind">
    <img src={image} alt="person" className="navBar__img"></img>
    <h4>{name}</h4>
  </div>
);
export default Sidebar;
