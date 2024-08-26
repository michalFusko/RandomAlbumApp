import React from 'react'


const Login = () => {
    const YOUR_CLIENT_ID = "c50c0ede979b4cc4ba5b463a9581ac12"
    const YOUR_REDIRECT_URI = "http://localhost:5173"
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${YOUR_CLIENT_ID}&response_type=token&redirect_uri=${YOUR_REDIRECT_URI}&scope=user-library-read`;

const redirectToSpotify = () => {
  window.location = AUTH_URL;
};
  return (
    <button onClick={() => redirectToSpotify()}>Login with Spotify ty kokot</button>
  )
}

export default Login