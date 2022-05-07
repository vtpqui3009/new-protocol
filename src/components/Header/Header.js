import React, { useRef, useEffect } from "react";
import WebLogo from "../../images/web-logo.png";
import "./Header.css";
// import Navbar from "./Navbar";
import Logo from "./Logo";
// import Banner from "../../images/bg-header.jpg";
import Video from "./background.mp4";
const Header = () => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <div className="header">
      <div className="logo">
        <img src={WebLogo} alt="" />
        <Logo />
      </div>
      <video
        autoPlay
        muted
        loop
        ref={videoRef}
        playsInline
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
