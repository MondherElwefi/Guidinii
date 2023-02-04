import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useContext,useState } from "react";
import DataContext from "../context/DataContext";

function Header() {
  const { theme, toggleTheme } = useContext(DataContext);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [state, setstate] = useState()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  if (!user) {
    return (
      <header className="header-wrapper">
        <Link to="/">
          <div className="logo">
            <img src="src/assets/imgs/logo.png" alt="pagelogo" />
            <span>Guidinii</span>
          </div>
        </Link>

        <nav className="nav-for-desktop">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/our-work">Our Work</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li
              onClick={() => {
                toggleTheme(theme == "" ? "dark" : "");
              }}
              className="icons-theme"
            >
              <i className="fa-solid fa-moon"></i>
              <i className="fa-regular fa-sun"></i>
            </li>
          </ul>
        </nav>

        <div className="btns-authentication">
          <button className="btn-signin">
            <Link to="/signin">Sign In</Link>
          </button>
          <button className="btn-signup">
            <Link to="/signup">Sign uP</Link>
          </button>
        </div>
      </header>
    );
  }
  if (user) {
    return (
      <header className="header-wrapper">
        <Link to="/">
          <div className="logo">
            <img src="src/assets/imgs/logo.png" alt="pagelogo" />
            <span>Guidinii</span>
          </div>
        </Link>

        <nav className="nav-for-desktop">
          <ul>
            <li>
              <Link to="/web-developer">Web developer</Link>
            </li>
            <li
              onClick={() => {
                toggleTheme(theme == "" ? "dark" : "");
              }}
              className="icons-theme"
            >
              <i className="fa-solid fa-moon"></i>
              <i className="fa-regular fa-sun"></i>
            </li>
          </ul>
        </nav>

        <div className="btns-authentication">
          <button className="btn-signup">
            <Link to="/profile">Profile</Link>
          </button>
          <button
            onClick={() => {
              handleSignOut();
              navigate("/signin");
            }}
            className="btn-signin"
          >
            Sign out
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
