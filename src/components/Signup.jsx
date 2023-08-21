import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Signup = () => {
  const [wrong, setwrong] = useState(true);
  const handlewrong = () => {
    setwrong(!wrong);
  };
  return (
    <div className="sign-up1">
      {wrong && (
        <div className="signup-div">
        <RxCross2 className="signup-cross" onClick={handlewrong} />
        <h1>sign-up for free</h1>
        <form class="custom-form">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
          />
  
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter a valid email here"
          />
  
          <label for="mobile">Mobile:</label>
          <input
            id="mobile"
            name="mobile"
            placeholder="Enter a valid mobile number"
          ></input>
          <button type="submit">Signup</button>
        </form>
      </div>
      )}
    </div>
  );
};

export default Signup;
