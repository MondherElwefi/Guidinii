import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Ourwork.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {useEffect } from 'react';
import { auth } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../components/Loading";

function Ourwork() {

  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if(user && !loading){
      navigate(-1)
    }
  });

  //LOADING
  if(loading){
    return <Loading />;
  }
  //PAGE FOR PEOPLE WITHOUT ACCOUNT
  if(!user){
    return (
      <>
        <Helmet>
          <title>Guidinii - Our Work</title>
        </Helmet>
        <Header />
  
        <main className="ourwork-wrapper">
          <img
            className="ourwork-img img-fluid"
            src="/src/assets/imgs/our-work-img.svg"
            alt="our work image"
          />
          <p className="ourwork-text">
            Our objective, to be a player in the world of tomorrow in
            terms of education and employment. And what better tool for that than
            digital. We give everyone the opportunity to acquire new skills and
            state-of-the-art knowledge. We aim to grow our community on a global
            scale, with more than 50 hackerspaces around the world with a focus on
            the MENA region, thereby making education in new technologies
            accessible to everyone.
          </p>
        </main>
  


        <Footer />
      </>
    );
  }
  
}

export default Ourwork;
