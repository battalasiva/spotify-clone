import React from 'react'
import {useNavigate} from "react-router-dom"
function Login() {
  const navigate=useNavigate();
  return (
    <div className='logo'>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify' />
        <button onClick={()=>navigate("/spotify")}>Connect To Spotify</button>
    </div>
  )
}

export default Login