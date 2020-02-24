import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <img className="click-item" alt={props.name} src={props.image} onClick={() => props.changeClickStatus(props.id)} />
  );
}

export default ImageCard;