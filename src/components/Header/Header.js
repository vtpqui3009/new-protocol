import React from "react";
import WebLogo from "../../images/web-logo.png";
import "./Header.css";
import Navbar from "./Navbar";
import Logo from "../Logo";
import Banner from "../../images/bg-header.jpg";
import Video from "./background.mp4";
const Header = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="header">
        <div className="backdrop"> </div>
        <div className="logo">
          <img src={WebLogo} alt="" width="100px" height="100px" />
          <Logo />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            // zIndex: -1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            // background: "rgba(0,0,0,.4)",
          }}
        >
          <video
            autoPlay
            loop
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
export default Header;
