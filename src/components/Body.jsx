import React, { useState } from "react";
import data from "./Data";
import { FiInstagram } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";
import Movie from "./Movie";
const Body = () => {
  return (
    <div className="body-container">
      <div className="body1">
        <ul>
          <li>
            <h1>Focus</h1>
          </li>
          <li>
            <h4>showall</h4>
          </li>
        </ul>
        <div className="card">
          {data.map((eachuser) => {
            return <Movie key={eachuser.id} eachuser={eachuser} />;
          })}
        </div>
        <hr />
        <div className="b-card">
          <div className="b-eachcard">
            <div className="body-card ">
              <h4>Company</h4>
              <p>About</p>
              <p>Jobs</p>
              <p>For the Record</p>
            </div>
            <div className="body-card ">
              <h4>Communities</h4>
              <p>For Artists</p>
              <p>Developers</p>
              <p>Advertising</p>
              <p>Investers</p>
              <p>Venders</p>
              <p>Spotify For Work</p>
            </div>
            <div className="body-card ">
              <h4>Useful links</h4>
              <p>Support</p>
              <p>Free Mobile App</p>
            </div>
            <div className="body-card">
              <div className="bottom-images">
                <FiInstagram className="instagram" />
                <RxTwitterLogo className="twitter" />
                <BsFacebook className="facebook" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="end"> copy write @sivaram💚</p>
      </div>
    </div>
  );
};

export default Body;
