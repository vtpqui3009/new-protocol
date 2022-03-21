import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [activeHome, setActiveHome] = useState(true);
  const [activeToken, setActiveToken] = useState(false);
  const [activeRoadmap, setActiveRoadmap] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const navItemClass = {
    color: "#9a1266",
    border: "2px solid #9a1266",
    borderRadius: "3px",
    transform: "skew(-6deg)",
  };
  const handleActiveHomeItem = () => {
    setActiveHome(true);
    setActiveToken(false);
    setActiveRoadmap(false);
    setActiveAbout(false);
    setActiveContact(false);
  };
  const handleActiveTokenItem = () => {
    setActiveHome(false);
    setActiveToken(true);
    setActiveRoadmap(false);
    setActiveAbout(false);
    setActiveContact(false);
  };
  const handleActiveRoadmapItem = () => {
    setActiveHome(false);
    setActiveToken(false);
    setActiveRoadmap(true);
    setActiveAbout(false);
    setActiveContact(false);
  };
  const handleActiveAboutItem = () => {
    setActiveHome(false);
    setActiveToken(false);
    setActiveRoadmap(false);
    setActiveAbout(true);
    setActiveContact(false);
  };
  const handleActiveContactItem = () => {
    setActiveHome(false);
    setActiveToken(false);
    setActiveRoadmap(false);
    setActiveAbout(false);
    setActiveContact(true);
  };
  return (
    <nav className="ml-[15%] nav pt-4 ">
      <ul className="flex items-center  text-2xl  nav-list">
        <li
          className="mx-4 cursor-pointer nav-item"
          style={activeHome ? navItemClass : null}
          onClick={handleActiveHomeItem}
        >
          Home
        </li>
        <li
          className="mx-4 cursor-pointer nav-item"
          style={activeToken ? navItemClass : null}
          onClick={handleActiveTokenItem}
        >
          <span>Token</span>
        </li>
        <li
          className="mx-4 cursor-pointer nav-item"
          style={activeRoadmap ? navItemClass : null}
          onClick={handleActiveRoadmapItem}
        >
          <span>Roadmap</span>
        </li>
        <li
          className="mx-4 cursor-pointer nav-item"
          style={activeAbout ? navItemClass : null}
          onClick={handleActiveAboutItem}
        >
          <span>About us</span>
        </li>
        <li
          className="mx-4 cursor-pointer nav-item"
          style={activeContact ? navItemClass : null}
          onClick={handleActiveContactItem}
        >
          <span>Contact us</span>
        </li>{" "}
      </ul>
    </nav>
  );
};
export default Navbar;
