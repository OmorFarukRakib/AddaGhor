import "./WelcomeMessage.css";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from ".././../firebase";
import firebase from "firebase/app";
import React, { useState, useEffect } from "react";
import ParticleBackground from "./ParticalBackground";
function WelcomeMessage() {
  const [logoshow, setLogoShow] = useState(true);
  const getlogosize = () => {
    const logo = document.querySelectorAll("#ultra-logo path");
    console.log(logo);
    for (let i = 0; i < logo.length; i++) {
      console.log(`letter ${i} -> ${logo[i].getTotalLength()}`);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLogoShow(false);
    }, 4500);
  }, []);

  return (
    <>
      {/* {logoshow && ( */}
      <>
        <div className="logo-background">
          <ParticleBackground />
          <div id="login-card">
            <h2>Welcome to AddaGhor</h2>
            <div
              className="login-button google"
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
              }
            >
              <GoogleOutlined /> Sign In With Google
            </div>
            <br />
            <br />
            <div
              className="login-button facebook"
              onClick={
                () => alert("Not yet been implemented")
                //   auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
              }
            >
              <FacebookOutlined /> Sign in With Facebook
            </div>
          </div>
          {/* <Logo /> */}
          {/* <div className="logo-sub-name"> Asia Pacific </div> */}
        </div>
      </>
      {/* )} */}
      {/* {!logoshow && <div className="App">Main Page</div>} */}
    </>
  );
}
export default WelcomeMessage;
