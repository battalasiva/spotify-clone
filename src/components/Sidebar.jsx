import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BiLibrary } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Playlist from "./Playlist";
import data from "./Data"; 
import {AiFillEyeInvisible} from 'react-icons/ai'
function Sidebar() {
  const [visible,setvisible]=useState(true);
  const handlevisibility =()=>{
   setvisible(!visible)
  }
  // const [searchterm,setsearchterm]=useState(data);
  // const [searchresults,setsearchresults]=useState('');
  // const handlesearch=(event)=>{
  //   const searchterm=event.target.value;
  //   setsearchterm(searchterm);
  //   const filteredData = data.filter((item) =>
  //     item.title.toLowerCase().includes(searchterm.toLowerCase())
  //   );

  //   setsearchresults(filteredData);
  // };

  return (
    <div>
      <AiFillEyeInvisible className="hamburger-icon" onClick={handlevisibility}/>
      {visible && (<div className="sidebar1" >
        <div className="top-links">
          <div className="home-stick">
            <div className="logo1">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
                alt="spotify"
              />
            </div>
            <ul className="s-ul1">
              <li className="s-li1 li1">
                <FaHome />
                <span> Home</span>
              </li>
              <li className="s-li1 search">
                <BiSearch className="icon-search" />
                <span className="form">
                  <input className="input-search" type="text"/>
                  <label for="">search</label>
                  {/* <ul>
                    {
                      searchterm.map((item,id) => (
                        <li key={id}>{item}</li>
                      ))
                    }
                  </ul> */}
                </span>
              </li>
              <li className="s-li1">
                <BiLibrary />
                <span> Your Library</span>
                <abbr title="create a playlist"> <AiOutlinePlus className="plus" /></abbr>
              </li>
            </ul>
          </div>
          <div className="playlist">
            <Playlist />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Sidebar;
