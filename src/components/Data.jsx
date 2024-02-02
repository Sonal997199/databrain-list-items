import React from "react";
import "./Data.css";

function Card({ post }) {
  return <div className="card">{post.title}</div>;
}

export default Card;
