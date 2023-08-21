import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { BsArrowLeftRight } from "react-icons/bs";

function Spotify() {
  const [showdiv, setshowdiv] = useState(true);
  const handleshowdiv = () => {
    setshowdiv(!showdiv);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateScreenDimensions = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenDimensions);

    return () => {
      window.removeEventListener("resize", updateScreenDimensions);
    };
  }, []);

  return (
    <div>
      {screenWidth <= 350 ? (
        screenWidth <= 350 && showdiv ? (
          <div className="layout">
            <div className="div23">
            <BsArrowLeftRight className="div23-arrow" onClick={handleshowdiv} />
            <Navbar />
            <Body />
          </div>
          <div className="footer">
        <Footer />
        s
      </div>
          </div>
        ) : (
          <div className="layout">
            <div className="sidebar">
              <BsArrowLeftRight
                className="div23-arrow"
                onClick={handleshowdiv}
              />
              <Sidebar />
            </div>
            <div className="footer">
        <Footer />
        
      </div>
          </div>
        )
      ) : (
        <div className="layout">
          <div className="container">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="div23">
              <Navbar />
              <Body />
            </div>
          </div>
          <div className="footer">
        <Footer />
       
      </div>
        </div>
      )}
      <div className="footer">
        <Footer />
        
      </div>
     
      
    </div>
  );
}

export default Spotify;
