import React from "react";
import data from "./Data1";
import { BiSolidPlaylist } from "react-icons/bi";
import {FiGlobe} from 'react-icons/fi'
function Playlist() {
  return (
    <div>
      <div className="playlist1">
        <div className="playlist2">
          <span>
            <BiSolidPlaylist /> <span>Playlist</span>
          </span>
        </div>
        <div className="playlist3">
          <div className="playlist3-1">
            <h4>Create your first playlist</h4>
            <p>it's easy , we'll help you</p>
            <button>Create a playlist</button>
          </div>
          <div className="playlist3-2">
            <h4>Let's find some podcasts to follow</h4>
            <p>we'll keep you updated on new episodes</p>
            <button>Browse podcasts</button>
          </div>
        </div>
      </div>
      <div className="line1">
        <li>Legal</li>
        <li>Privecy center</li>
        <li>Privecy Policy</li>
        <li>Cookies</li>
      </div>
      <div className="line1">
        <li>About Ads</li>
        <li>Accessbility</li>
      </div>
      <div className="line1">
        <li>Cookies</li>
      </div>
      <div className="selectors">
        <select name="language">
            <FiGlobe/>
            <option value="english">English</option>
            <option value="hindi">hindi</option>
            <option value="tamil">tamil</option>
            <option value="telugu">telugu</option>
            <option value="marati">marati</option>
            <option value="arabic">arabic</option>
            <option value="odiya">odiya</option>
            <option value="malayalam">malayalam</option>
        </select>
      </div>
    </div>
  );
}

export default Playlist;
