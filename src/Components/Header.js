import React from "react";
import image from "../Assets/starwars_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={image} className="logo"></img>
    </div>
  );
};

export default Header;
