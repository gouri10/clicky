import React from "react";
import "./style.css";

function Header(props) {
  return (
  <header class="header">
    <h1>Clicky Game!</h1>
    <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    <p>{props.imageType}</p>
    </header>
    );
}

export default Header;