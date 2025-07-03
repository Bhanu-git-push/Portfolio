import React, { useState } from "react";
import aboutImage from "../assets/images/about.jpeg";
const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about
          <span>me</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImage} className="about-photo" />
        </div>
        <article className="about-info">
          <h1>Bhanu Prakash</h1>
          <p>
            Hi, I’m a dedicated Web Developer with a passion for crafting scalable, user-centric applications. Since joining HCLTech in November 2022, I've been immersed in dynamic development environments, building solutions that make a global impact.
          </p>
          <p>
            I started my journey working with Western Union, contributing to
            the development and support of applications across multiple
            countries and regions. My focus was on integrating diverse payment
            methods using the AngularJS framework—ensuring a seamless user
            experience across geographies and devices.
          </p>
          {/* <p>
            I started my journey working with Western Union, contributing to the development and support of applications across multiple countries and regions. My focus was on integrating diverse payment methods using the AngularJS framework—ensuring a seamless user experience across geographies and devices.
          </p>
          <p>
            Later, I transitioned to HCL Hive, a cutting-edge data visualization platform under HCL Software, where I worked extensively with ReactJS and Kendo UI. Here, I helped turn complex cloud-related data into intuitive visual dashboards, empowering users with actionable insights and streamlined interfaces.
          </p>
          <a href="" className="btn">
            read more
          </a> */}
          {showMore && (
        <>
          <p>
            Later, I transitioned to HCL Hive, a cutting-edge data
            visualization platform under HCL Software, where I worked
            extensively with React JS and Kendo UI. Here, I helped turn complex
            cloud-related data into intuitive visual dashboards, empowering
            users with actionable insights and streamlined interfaces.
          </p>
        </>
      )}

      <button className="btn" onClick={handleToggle}>
        {showMore ? "read less" : "read more"}
      </button>
        </article>
      </div>
    </section>
  );
};

export default About;
