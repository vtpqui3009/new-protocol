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
      {/* <div
        dangerouslySetInnerHTML={{
          __html: ` <video
        loop
        muted
        autoPlay
        playsInline
        style={
          ${
            width < 768
              ? {
                  width: "100%",
                  height: "100%",
                }
              : { width: "auto" }
          }
         }
      >
      <source src=${Video} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
        }}
      /> */}
      <video
        loop
        muted
        autoPlay
        playsInline
        className={width < 768 ? "video-mobile" : "video-desktop"}
      >
        <source src={Video} type="video/mp4" /> Your browser does not support
        the video tag.
      </video>
    </div>
  );
};
export default Header;
