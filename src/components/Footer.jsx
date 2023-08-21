import React,{useState} from "react";
import Signup from "./Signup";

const Footer=()=> {
  const [opendiv,setopendiv]=useState(false);
  const handlesignup=()=>{
    if(opendiv === false){
      setopendiv(true);
    }else{
      setopendiv(false);
    }   
 }
  // const handleclick = () => {
  //   window.location.href = "https://mail.google.com";
  // };
  return (
    <div className="footer">
      <button onClick={handlesignup}>Sign up free</button>
      <table className="f-table">
        <tr>
          <td>PREVIEW OF SPOTIFY</td>
        </tr>
        <tr>
          <td className="f-data">
            Sign up to get unllimited songs and podcasts with occasional ads.No
            credit card needed.
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
