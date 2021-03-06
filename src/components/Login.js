import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";
import WelcomeMessage from "./ParticleBackground/WelcomeMessage";

const Login = () => {
  return (
    <>
      {/* <div id="login-pageeee"> */}
          <WelcomeMessage/>
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
            onClick={() =>
                alert("Not yet been implemented")
            //   auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
          >
            <FacebookOutlined /> Sign in With Facebook
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Login;
