import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./Contactus.css"
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";
import {useEffect } from 'react';
import { auth } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../components/Loading";
function Contactus() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(user && !loading){
      navigate("/")
    }
  });

  if(loading){
    return <Loading />;
  }
  if(!user){
    return (
      <>
      <Helmet>
        <title>Guidinii - Contact us</title>
      </Helmet>
      <Header/>
  
  
  
  
      <main className='contact-wrapper container-fluid'>
        <h1 className='contact-title'>Contact us</h1>
        <div className="contact-main row">
            <div className="col-sm-4">
              <img className='contact-img img-fluid d-none d-sm-block' src="/src/assets/imgs/contactus-img.svg" alt="contact us image" />
            </div>
            <div  className="col-12 col-sm-6 ">
                <form className='contact-form'>
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                  <input type="text" placeholder='Message' />
                  <button className="btn-send">Send</button>
                </form>
            </div>
        </div>
      </main>
  
  
  
  
  
  
  
  
  
      <Footer/>
      </>
    )
  }
  
  
}

export default Contactus