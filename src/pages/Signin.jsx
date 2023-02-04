import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Signin.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword ,sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
function Signin() {
  const navigate = useNavigate();
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailResetPassword, setEmailResetPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [checkEmailText, setCheckEmailText] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");


  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  });

  //FIREBASE SIGNIN
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setHasError(true)
                switch (errorCode) {

                  case "auth/invalid-email":
                    setFirebaseError("Please enter your Email")
                    break;

                  case "auth/user-not-found":
                    setFirebaseError("Wrong Email")
                    break;

                  case "auth/wrong-password":
                    setFirebaseError("Wrong Password")
                    break;

                  case "auth/too-many-requests":
                    setFirebaseError("Too many requests, please try aganin later")
                    break;
                  case "auth/internal-error":
                    setFirebaseError("Please enter your Password")
                    break;  
                  default:
                    setFirebaseError("Please check your email & password")
                    break;

                }
      });
  };

  //FIREBASE RESET PASSWORD
  const handleEmailResetPassword = () => {
    sendPasswordResetEmail(auth, emailResetPassword)
      .then(() => {
        // Password reset email sent!
        // ..
        setCheckEmailText(true)
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  //LOADING
  if (loading) {
    return <Loading />;
  }

  //PEOPLE WITHOUT ACCOUNT
  if (!user) {
    return (
      <>
        <Helmet>
          <title>Guidinii - Signin</title>
        </Helmet>
        <Header />

        <main className="signin-wrapper container-fluid">
          <div className="signin-main row">
            <div className="col-4">
              <img
                className="signin-img img-fluid d-none d-sm-block"
                src="/src/assets/imgs/signin-img.svg"
                alt="signin image"
              />
            </div>
            <div
              
              className="col-12 col-sm-6"
            >
              <form className="signin-form">
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
                />
                <p
                  onClick={() => {
                    setShowForgetPassword(true);
                  }}
                  className="forget-password"
                >
                  Forget Password ?
                </p>
              {hasError &&  <p className="signin-errors" >{firebaseError}</p>}
                <button
                  onClick={(eo) => {
                    eo.preventDefault();
                    handleSignIn();
                  }}
                  className="btn-signin"
                >
                  Singin
                </button>
                <p className="dont-have-account">
                  Don't Have an Account ? <Link to="/signup">Sign up</Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </main>

        {showForgetPassword && (
          <div className="forget-password-wrapper">
            <i
              onClick={() => {
                setShowForgetPassword(false);
              }}
              className="close-btn fa-solid fa-xmark"
            ></i>
            <form>
              <input
                onChange={(e) => {
                  setEmailResetPassword(e.target.value);
                }}
                type="text"
                placeholder="Enter Your email"
              />
              <button
                onClick={(eo) => {
                  eo.preventDefault();
                  handleEmailResetPassword()
                  
                }}
                className="resend-email"
              >
                Resend Email
              </button>
              {checkEmailText &&  <p>Check Your Email</p>}
              
            </form>
          </div>
        )}

        <Footer />
      </>
    );
  }
}

export default Signin;
