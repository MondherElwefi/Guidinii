import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import CardsPage from "../components/CardsPage";
import Statistical from "../components/Statistical";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../components/Loading";

function Home() {
  const [user, loading, error] = useAuthState(auth);

  //FIREBASE EMAIL VERIFICATION
  const handleEmailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
    });
  };

  //LOADING

  if (loading) {
    return <Loading />;
  }

  //HOME FOR PEOPLE WITHOUT ACCOUNT

  if (!user) {
    return (
      <>
        <Helmet>
          <title>Guidinii - Home</title>
        </Helmet>

        <Header />

        <main className="container-md home">
          <div className="row align-items-center home-wrapper">
            <div className="col-12 col-md-6 home-text">
              <p>
                Our goal is to be tomorrow's global player in terms of education
                and employment. And there's no better way to do it than
                digitally. We provide opportunities for everyone to acquire new
                skills and up-to-date knowledge.
              </p>
              <button className="btn-join-now">
                <Link to="/signup">Join Now</Link>
              </button>
            </div>
            <div className="col-6">
              <img
                className="img-fluid d-none d-md-block"
                src="/src/assets/imgs/online-learning-home-img.svg"
                alt="home image"
              />
            </div>
          </div>
        </main>

        <CardsPage />
        <Statistical />

        <Footer />
      </>
    );
  }

  //HOME FOR PEOPLE WITH ACCOUNT

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Guidinii - Home</title>
          </Helmet>

          <Header />

          <main className="home-user">
            <p>
              Hi {user.displayName} , It Will Be a Long Journey But its Worth it{" "}
              <br />
            </p>
          </main>

          <Footer />
        </>
      );
    }
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Guidinii - Home</title>
          </Helmet>

          <Header />

          <main className="home-user">
            <p>
              Hi {user.displayName} , It Will Be a Long Journey But its Worth it{" "}
              <br />
              Please Verify Your Email To Continue
            </p>
            <button
              onClick={() => {
                handleEmailVerification();
              }}
              className="btn-join-now"
            >
              Resend Email
            </button>
          </main>

          <Footer />
        </>
      );
    }
  }
}

export default Home;
