import React from "react";
import WebLogo from "../../images/web-logo.png";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "../Logo";
import Banner from "../../images/bg-header.jpg";
import Video from "./background.mp4";
const Header = () => {
  return (
    <div className="header">
      <div className="backdrop"> </div>
      <div className="logo">
        <img src={WebLogo} alt="" width="100px" height="100px" />
        <Logo />
      </div>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100vh",
          // transform: "translateX(-70px)",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};
export default Header;
