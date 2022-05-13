import React, { useState, useEffect } from "react";
import WebLogo from "../../images/web-logo.png";
import "./Header.css";
import Logo from "./Logo";
import Video from "./background.mp4";
const Header = () => {
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <img src={WebLogo} alt="" />
        <Logo />
      </div>

      <video
        autoPlay={true}
        loop={true}
        controls={false}
        muted
        playsInline
        defaultMuted
        className={width < 768 ? "video-mobile" : "video-desktop"}
      >
        <source src="./background.mp4" type="video/mp4" /> Your browser does not
        support the video tag.
      </video>
    </div>
  );
};
export default Header;
