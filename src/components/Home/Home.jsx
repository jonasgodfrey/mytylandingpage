import React from "react";
import classes from "./Home.module.scss";
import highRiseImg from "../../assets/highRise.png";
import Header from "../Header/Header";
import cardImg1 from "../../assets/cardImg1.png";
import cardImg2 from "../../assets/cardImg2.png";
import cardImg3 from "../../assets/cardImg3.png";
import cardImg4 from "../../assets/cardImg4.png";
import youtubeImg from "../../assets/Youtube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
      <Header />
      <section className={classes.home}>
        {/* Section one Start */}
        <section className={classes.sectionOne}>
          <section className={classes.headLineUnit}>
            <section className={classes.headLinePage_text}>
              <div className={classes.headlineBlock}>
                <h1 className={classes.headline}>
                  Manage your rental real estate properties with ease.
                </h1>
                <span className={classes.request_demo}>Request a demo </span>
              </div>
              <p className={classes.sub_headline}>
                Your all-in-one platform <br /> to automate property management,
                streamline facility maintenance, and simplify the onboarding
                process. Experience smarter tenant management today.
              </p>
            </section>
          </section>{" "}
          <section className={classes.highRise_building}>
            <img src={highRiseImg} alt="highRiseImg" />
          </section>
        </section>
        {/* Section one End */}
        {/* Section Two Start */}
        <section className={classes.sectionTwo}>
          <section className={classes.sectionTwo_content}>
            {/* one_stop_solution start */}{" "}
            <section className={classes.one_stop_solution}>
              <span>ONE STOP SOLUTION</span>
              <h2>We are set to help you digitize the real estate services</h2>
              <span className={classes.request_demo}>Request a demo </span>
            </section>
            {/* one_stop_solution end */}
            {/* cards start */}
            <section className={classes.cards}>
              <section className={classes.card_flexBox}>
                <div className={`${classes.card} ${classes.card1}`}>
                  <img src={cardImg1} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>property managers</span>
                    <a href="#">link</a>
                  </div>
                </div>
                <div className={`${classes.card} ${classes.card2}`}>
                  <img src={cardImg2} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>property managers</span>
                    <a href="#">link</a>
                  </div>
                </div>
              </section>
              <section className={classes.card_flexBox}>
                <div className={`${classes.card} ${classes.card3}`}>
                  <img src={cardImg3} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>property managers</span>
                    <a href="#">link</a>
                  </div>
                </div>
                <div className={`${classes.card} ${classes.card4}`}>
                  <img src={cardImg4} alt="cardImg" />
                  <div className={classes.card_text}>
                    <span>property managers</span>
                    <a href="#">link</a>
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
            <h1>The Future of Property Management.</h1>
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
                <span>automated reminders</span>
              </p>
            </div>
            <div className={classes.offer}>
              <p className={classes.description}>
                You can send automated reminders to tenants via SMS and email,
                ensuring timely communication and streamlined management.
              </p>
              <p className={classes.offer_title}>
                <span>automated reminders</span>
              </p>
            </div>
            <div className={classes.offer}>
              <p className={classes.description}>
                You can send automated reminders to tenants via SMS and email,
                ensuring timely communication and streamlined management.
              </p>
              <p className={classes.offer_title}>
                <span>automated reminders</span>
              </p>
            </div>
          </section>
          <section className={classes.q_and_a}>
            <section className={classes.find_answers}>
              <h1>Find the Answers You're Looking For.</h1>
              <span className={classes.request_demo}>Request a demo </span>
            </section>
            {/* questions- start */}
            <section className={classes.questionBlock}>
              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={`${classes.questionA} ${classes.question1}`}>
                    What is MyTenancyPlus?
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} size="0.2x" />
                </p>
                <p className={classes.answer}>
                  Set up is free, Our support team is available to help you set
                  up and onboard your tenants for free.
                </p>
              </section>
              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    How many Properties can I manage on My Tenancy Plus?
                  </span>
                  <span>arrow</span>
                </p>
                <p className={classes.answer}>
                  Set up is free, Our support team is available to help you set
                  up and onboard your tenants for free.
                </p>
              </section>
              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    What do I stand to gain for subscribing on My Tenancy Plus?
                  </span>
                  <span>arrow</span>
                </p>
                <p className={classes.answer}>
                  Set up is free, Our support team is available to help you set
                  up and onboard your tenants for free.
                </p>
              </section>
              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    What is the cost for set up?
                  </span>
                  <span>arrow</span>
                </p>
                <p className={classes.answer}>
                  Set up is free, Our support team is available to help you set
                  up and onboard your tenants for free.
                </p>
              </section>
              <section className={classes.question}>
                <p className={classes.question_answer}>
                  <span className={classes.questionB}>
                    Can I schedule a call with MyTenancy Plus team?
                  </span>
                  <span>arrow</span>
                </p>
                <p className={classes.answer}>
                  Set up is free, Our support team is available to help you set
                  up and onboard your tenants for free.
                </p>
              </section>
            </section>
            {/* questions- start */}
          </section>
        </section>
        {/* section 4 end */}

        <section className={classes.footer}></section>
      </section>
    </>
  );
};

export default Home;
