import React from "react";
import WebLogo from "../../images/web-logo.png";
import "./Header.css";
// import Navbar from "./Navbar";
import Logo from "./Logo";
// import Banner from "../../images/bg-header.jpg";
import Video from "./background.mp4";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={WebLogo} alt="" />
        <Logo />
      </div>
      <video
        loop={true}
        muted={true}
        autoPlay={true}
        playsinline={true}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};
export default Header;
