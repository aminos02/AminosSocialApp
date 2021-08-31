import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
