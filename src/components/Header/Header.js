import React, { useState, useEffect } from "react";
import WebLogo from "../../images/web-logo.png";
import "./Header.css";
import Logo from "./Logo";
import BackgroundMobile from "./background-mobile.png";
import Video from "./background.mp4";
const Header = () => {
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <img src={WebLogo} alt="" />
        <Logo />
      </div>
      {width > 480 && (
        <video
          autoPlay={true}
          loop={true}
          muted
          playsInline
          // defaultmuted="true"
          className="video-desktop"
        >
          <source src={Video} type="video/mp4" /> Your browser does not support
          the video tag.
        </video>
      )}
      {width < 480 && (
        <img alt="" src={BackgroundMobile} className="background-mobile" />
      )}
    </div>
  );
};
export default Header;
