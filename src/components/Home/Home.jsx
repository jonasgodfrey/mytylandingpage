import React, { useState } from "react";
import classes from "./Home.module.scss";
import highRiseImg from "../../assets/highRise.png";
import Header from "../Header/Header";
import cardImg1 from "../../assets/cardImg1.png";
import cardImg2 from "../../assets/cardImg2.png";
import cardImg3 from "../../assets/cardImg3.png";
import cardImg4 from "../../assets/cardImg4.png";
import youtubeImg from "../../assets/Youtube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import logoWhite from "../../assets/logo_white.png";
import SparkleIcon from "../Icons/SparkleIcon";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const [activeQuestion, setActiveQuestion] = useState(null); 

  const revealAnswerT = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question); 
  };
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <Header openNav={openNav} /> {/* Pass openNav to Header */}
      
      {/* Full-screen overlay navigation */}
      <nav className={`${classes.navOverlay} ${isNavOpen ? classes.show : ""}`}>
        <button className={classes.closeBtn} onClick={closeNav}>
          <FontAwesomeIcon icon={faTimes} /> {/* 'X' button to close the menu */}
        </button>
        <ul className={classes.navLinks}>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Create Account</a></li>
         
        </ul>
      </nav>

      <section className={classes.home}>
        {/* Your main content (Section one, two, etc.) */}
        <section className={classes.sectionOne}>
          <section className={classes.headLineUnit}>
            <section className={classes.headLinePage_text}>
              <div className={classes.headlineBlock}>
                <h1 className={classes.headline}>
                  Manage your rental real estate properties with ease.
                </h1>
                <span className={classes.request_demo}>
                  {" "}
                  <span>Request a demo</span>{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="#fff"
                    >
                      <path d="M9 3a1 1 0 0 0 0 2h6.586L4.293 16.293a1 1 0 0 0 1.414 1.414L17 6.414V13a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2H9z" />
                    </svg>
                  </a>{" "}
                </span>
              </div>
              <p className={classes.sub_headline}>
                Your all-in-one platform to <br />
                automate property management, streamline facility maintenance,
                <br />
                and simplify the onboarding <br /> process. Experience smarter{" "}
                <br />
                tenant management today.
              </p>
            </section>
          </section>
          <section className={classes.highRise_building}>
            <img src={highRiseImg} alt="highRiseImg" />
          </section>
        </section>
        {/* Section one End */}
        {/* Section Two Start */}
        <section className={classes.sectionTwo}>
          <section className={classes.sectionTwo_content}>
            <section className={classes.one_stop_solution}>
              <span>ONE STOP SOLUTION</span>
              <h2>We are set to help you digitize the real estate services</h2>
              <span className={classes.request_demo}>
                {" "}
                <span>Request a demo</span>{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="#fff"
                  >
                    <path d="M9 3a1 1 0 0 0 0 2h6.586L4.293 16.293a1 1 0 0 0 1.414 1.414L17 6.414V13a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2H9z" />
                  </svg>
                </a>{" "}
              </span>
            </section>
            {/* cards start */}
            <section className={classes.cards}>
              <section className={classes.card_flexBox}>
                <div className={`${classes.card} ${classes.card1}`}>
                  <img src={cardImg1} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>property managers</span>
                    <a href="#">
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: "1.3rem" }}
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className={`${classes.card} ${classes.card2}`}>
                  <img src={cardImg2} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>estate managers</span>
                    <a href="#">
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: "1.3rem" }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </section>
              <section className={classes.card_flexBox}>
                <div className={`${classes.card} ${classes.card3}`}>
                  <img src={cardImg3} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>facility managers</span>
                    <a href="#">
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: "1.3rem" }}
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className={`${classes.card} ${classes.card4}`}>
                  <img src={cardImg4} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>property owners</span>
                    <a href="#">
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ fontSize: "1.3rem" }}
                      />{" "}
                    </a>
                  </div>
                </div>
              </section>
            </section>
            {/* cards end */}
          </section>
        </section>
        {/* Section Two End */}
        {/* Section 3 Start */}
        <section className={classes.sectionThree}>
          <section className={classes.sectionThree_content}>
            <h1 style={{ color: "#001D3D" }}>
              The Future of Property Management.
            </h1>
            <img src={youtubeImg} alt="youtube" />
          </section>
        </section>
        {/* section 3 end */}
        {/* section 4 start */}
        <section className={classes.sectionFour}>
          <div className={classes.sectionFour_header}>
            <span>here's what we offer.</span>
          </div>
          <section className={classes.offers}>
            <div className={classes.offer}>
              <p className={classes.description}>
                You can send automated reminders to tenants via SMS and email,
                ensuring timely communication and streamlined management.
              </p>
              <p className={classes.offer_title}>
                <SparkleIcon />
                <span>automated reminders</span>
              </p>
            </div>
            <div className={classes.offer}>
              <p className={classes.description}>
                You can send automated reminders to tenants via SMS and email,
                ensuring timely communication and streamlined management.
              </p>
              <p className={classes.offer_title}>
                <SparkleIcon />
                <span>data security</span>
              </p>
            </div>
            <div className={classes.offer}>
              <p className={classes.description}>
                You can send automated reminders to tenants via SMS and email,
                ensuring timely communication and streamlined management.
              </p>
              <p className={classes.offer_title}>
                <SparkleIcon />
                <span>rental data & reports</span>
              </p>
            </div>
          </section>
          <section className={classes.q_and_a}>
            <section className={classes.find_answers}>
              <h1>Find the Answers You're Looking For.</h1>

              <span className={classes.request_demo}>
                {" "}
                <span>Request a demo</span>{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="#fff"
                  >
                    <path d="M9 3a1 1 0 0 0 0 2h6.586L4.293 16.293a1 1 0 0 0 1.414 1.414L17 6.414V13a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2H9z" />
                  </svg>
                </a>{" "}
              </span>
            </section>
            <section className={classes.questionBlock}>
              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={`${classes.questionA} ${classes.question1}`}>
                    What is MyTenancyPlus?
                  </span>{" "}
                  <span
                    className={classes.arrow}
                    onClick={() => revealAnswerT(1)}
                  >
                    <FontAwesomeIcon
                      icon={activeQuestion === 1 ? faArrowUp : faArrowRight}
                      style={{ fontSize: "1.3rem" }}
                    />
                  </span>
                </p>
                <p
                  className={classes.answer}
                  style={{ display: activeQuestion === 1 ? "block" : "none" }}
                >
                  MyTenancyPlus is an online platform designed to help property
                  managers streamline the process of managing rental properties,
                  tenants, and leases, all in one place.
                </p>
              </section>

              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    How many Properties can I manage on My Tenancy Plus?
                  </span>
                  <span
                    className={classes.arrow}
                    onClick={() => revealAnswerT(2)}
                  >
                    <FontAwesomeIcon
                      icon={activeQuestion === 2 ? faArrowUp : faArrowRight}
                      style={{ fontSize: "1.3rem" }}
                    />
                  </span>
                </p>
                <p
                  className={classes.answer}
                  style={{ display: activeQuestion === 2 ? "block" : "none" }}
                >
                  There is no limit to the number of properties you can manage
                  on MyTenancyPlus, allowing you to efficiently handle multiple
                  properties from a single account.
                </p>
              </section>

              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    What do I stand to gain for subscribing on My Tenancy Plus?
                  </span>
                  <span
                    className={classes.arrow}
                    onClick={() => revealAnswerT(3)}
                  >
                    <FontAwesomeIcon
                      icon={activeQuestion === 3 ? faArrowUp : faArrowRight}
                      style={{ fontSize: "1.3rem" }}
                    />
                  </span>
                </p>
                <p
                  className={classes.answer}
                  style={{ display: activeQuestion === 3 ? "block" : "none" }}
                >
                  By subscribing to MyTenancyPlus, you gain access to powerful
                  tools for property management, such as automated rent
                  collection, tenant onboarding, maintenance tracking, and more,
                  ensuring a hassle-free experience for you and your tenants.
                </p>
              </section>

              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>What is the cost for set up?</span>
                  <span
                    className={classes.arrow}
                    onClick={() => revealAnswerT(4)}
                  >
                    <FontAwesomeIcon
                      icon={activeQuestion === 4 ? faArrowUp : faArrowRight}
                      style={{ fontSize: "1.3rem" }}
                    />
                  </span>
                </p>
                <p
                  className={classes.answer}
                  style={{ display: activeQuestion === 4 ? "block" : "none" }}
                >
                  Set up is free, Our support team is available to help you set
                  up and onboard your tenants for free.
                </p>
              </section>

              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    Can I schedule a call with MyTenancy Plus team?
                  </span>
                  <span
                    className={classes.arrow}
                    onClick={() => revealAnswerT(5)}
                  >
                    <FontAwesomeIcon
                      icon={activeQuestion === 5 ? faArrowUp : faArrowRight}
                      style={{ fontSize: "1.3rem" }}
                    />
                  </span>
                </p>
                <p
                  className={classes.answer}
                  style={{ display: activeQuestion === 5 ? "block" : "none" }}
                >
                  Yes, you can schedule a call with our MyTenancyPlus support
                  team at any time. We are available to assist with any
                  questions or provide further guidance on how to maximize the
                  platform for your property management needs.
                </p>
              </section>
            </section>
          </section>
        </section>
        {/* section 4 end */}

        <section className={classes.footer}>
          <section className={classes.footerContent}>
            <div className={classes.contentRight}>
              <span className={classes.footerHeading}>
                Transform Your <br /> Property <br /> Management Today
              </span>
              <span className={classes.request_demo}>
                {" "}
                <span>Request a demo</span>{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="#fff"
                  >
                    <path d="M9 3a1 1 0 0 0 0 2h6.586L4.293 16.293a1 1 0 0 0 1.414 1.414L17 6.414V13a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2H9z" />
                  </svg>
                </a>{" "}
              </span>
            </div>
            <div className={classes.socials_logo}>
              <div className={classes.socials}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="icon-white"
                  />
                </a>{" "}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="icon-white" />
                </a>{" "}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon-white" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} className="icon-white" />
                </a>
              </div>
              <div className={classes.logo}>
                <img src={logoWhite} alt="MyTPlus Logo" />
              </div>
            </div>
          </section>
          <span className={classes.allRightsReserved}>
            &copy; 2024 MyTPlus. All Rights Reserved
          </span>
        </section>
      </section>
    </>
  );
};

export default Home;



