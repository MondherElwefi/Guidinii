import React from 'react'
import "./Profile.css"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { auth } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import {useEffect } from 'react';
import {deleteUser } from "firebase/auth";

function Profile() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleDeleteUser = () => {
    deleteUser(user).then(() => {
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
    
  }
   
  useEffect(() => {
    if(!user && !loading){
      navigate(-1)
    }
    if(user && !loading && !user.emailVerified){
      navigate("/")
    }
  });

  if(loading){
    return <Loading/>
  }

  if(user && user.emailVerified){
    return (
      <>
      <Helmet>
          <title>Guidinii - Profile</title>
        </Helmet>
      <Header/>
      <div className='profile-wrapper'>
        <div>
          <p> Name : {user.displayName}</p>
          <p> Email : {user.email}</p>
          <button onClick={()=>{
            handleDeleteUser()
          }} className='delete-btn'>Delete Account</button>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  
}

export default Profile