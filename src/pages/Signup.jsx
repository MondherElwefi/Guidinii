import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Signup.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/Loading";

function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [hasError, setHasError] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  });

  //FIREBASE CHANGE USERNAME
  const handleUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then(() => {
        // Profile updated!
        
        
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
      
      
  };
  //FIREBASE EMAIL VERIFICATION

  const handleEmailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      
    });
  };


  //FIREBASE SIGNUP
  const handleSignup = (eo) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        handleUserName();
        
        handleEmailVerification();
        
        navigate("/");  

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setHasError(true);
        switch (errorCode) {
          case "auth/invalid-email":
            setFirebaseError("Please enter your Email");
            break;

          case "auth/user-not-found":
            setFirebaseError("Wrong Email");
            break;

          case "auth/wrong-password":
            setFirebaseError("Wrong Password");
            break;

          case "auth/too-many-requests":
            setFirebaseError("Too many requests, please try aganin later");
            break;
          case "auth/internal-error":
            setFirebaseError("Please enter your Password");
            break;
          default:
            setFirebaseError("Please check your email & password");
            break;
        }
      });
  };


  //LOADING
  if (loading) {
    return <Loading />;
  }
  //PEOPPLE WITHOUT ACCOUNT
  if (!user) {
    return (
      <>
        <Helmet>
          <title>Guidinii - Signup</title>
        </Helmet>
        <Header />
        <main className="signup-wrapper container-fluid">
          <div className="signup-main row">
            <div className="col-4">
              <img
                className="signup-img img-fluid d-none d-sm-block"
                src="/src/assets/imgs/signup-img.svg"
                alt="signin image"
              />
            </div>
            <div
              className="col-12 col-sm-6"
            >
              <form className="signup-form">
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                  required
                />
                {hasError && <p className="signin-errors">{firebaseError}</p>}
                <button
                  onClick={(eo) => {
                    eo.preventDefault();
                    handleSignup();
                  }}
                  className="btn-signup"
                >
                  Signup
                </button>
                <p className="dont-have-account">
                  Already Have an Account <Link to="/signin">Sign In</Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Signup;
