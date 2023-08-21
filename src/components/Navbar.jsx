import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Signup from "./Signup";

const Navbar = () => {
  const [opendiv, setopendiv] = useState(false);
  const handlesignup = () => {
    if (opendiv === false) {
      setopendiv(true);
    } else {
      setopendiv(false);
    }
  };
  return (
    <div className="navbar">
      <AiOutlineLeft className="arrow" />
      <span>
        <button className="signup" onClick={handlesignup}>
          Sign-up
        </button>
        {opendiv && <Signup />}
        <button className="signup" onClick={handlesignup}>
          Log-in
        </button>
        {opendiv && <Signup />}
      </span>
    </div>
  );
};

export default Navbar;
