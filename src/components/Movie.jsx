import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { useState } from "react";

const Movie = ({eachuser}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div
      className="each-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="each-one">
        <p className="card-img">{eachuser.image}</p>
        <h5 className="each-card-title">{eachuser.title}</h5>
        {isHovered && (
          <div className="icons">
            <BsPlayCircle className="icon"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
