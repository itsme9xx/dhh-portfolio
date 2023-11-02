import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section-center">
        <div className="section-title about-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            About me
          </h2>
          <div className="underline"></div>
        </div>

        <div className="about-center animate" data-animate="slideInLeft 2s">
          <div className="about-center-info">
            <h3>Get to know me!</h3>
            <p>
              My name is Hai Do. I started learning how to code in December 2021
              and spent most of my day experimenting with HTML, CSS and
              JavaScript, React.
              <br />I enjoy coding and the challenge of learning something new
              everyday. My goal is to pursue a career in the field of front-end
              development.
            </p>
          </div>

          <div className="animate" data-animate="slideInRight 2s">
            <h3>Education</h3>
            <div>
              <p>2017-2022</p>
              <h4>Thuy Loi University</h4>
            </div>
            <div>
              <p>8/2022-11/2022</p>
              <h4>Working Develop Web at RaceFi before but retired </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
