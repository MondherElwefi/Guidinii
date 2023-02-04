import React from "react";
import "./WebDeveloperPage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function WebDeveloperPage() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate(-1);
    }
    if (user && !loading && !user.emailVerified) {
      navigate("/");
    }
  });

  if (loading) {
    return <Loading />;
  }
  if (user && user.emailVerified) {
    return (
      <>
        <Helmet>
          <title>Guidinii - Web Developer</title>
        </Helmet>
        <Header />

        <div className="web-developer-page-wrapper">
          <h1 className="section-title">Start with Web development</h1>

          <div className="section-wrapper ">
            <a
              href="https://www.youtube.com/watch?v=HD13eq_Pmp8"
              target="_blank"
              className="tech-wrapper"
            >
              <img
                className="img-tech"
                src="/src/assets/imgs/tech-imgs/html.png"
                alt="img"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=0W6qz0-aDaM&list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
              target="_blank"
              className="tech-wrapper"
            >
              <img
                className="img-tech"
                src="/src/assets/imgs/tech-imgs/css.png"
                alt="img"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=STEfmxQjO2Q&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1"
              target="_blank"
              className="tech-wrapper"
            >
              <img
                className="img-tech"
                src="/src/assets/imgs/tech-imgs/js.png"
                alt="img"
              />
            </a>
          </div>

          <h1 className="section-title">Become w Web Professional</h1>

          <div className="section-wrapper ">
            <a
              href="https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=1"
              target="_blank"
              className="tech-wrapper"
            >
              <img
                className="img-tech"
                src="/src/assets/imgs/tech-imgs/react.png"
                alt="img"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=9IufyZ0G0qg&list=PLjsBk8SIQEi-RqkglLcn19TaeeopcuDXV"
              target="_blank"
              className="tech-wrapper"
            >
              <img
                className="img-tech"
                src="/src/assets/imgs/tech-imgs/angular.png"
                alt="img"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=O_9u1P5YjVc&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR"
              target="_blank"
              className="tech-wrapper"
            >
              <img
                className="img-tech"
                src="/src/assets/imgs/tech-imgs/bootstrap.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default WebDeveloperPage;
