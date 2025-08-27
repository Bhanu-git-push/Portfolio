import React from "react";

const Main = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Web developer</h1>
        <p>
          Hi, I’m Bhanu Prakash, a passionate and detail-oriented Web Developer with a knack for turning ideas into interactive digital experiences. I specialize in building responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React and Vue Js.
        </p>
        <p>
          With a background in both design and development, I bridge the gap between beautiful interfaces and robust functionality. Whether it's crafting a sleek landing page or architecting a full-stack application, I love solving problems and bringing concepts to life on the web.
        </p>
        <p>
          When I’m not coding, you’ll find me exploring new tech trends, contributing to open-source projects, or sketching out UI ideas in my notebook. I believe in continuous learning and collaboration—and I’m always excited to take on new challenges.
        </p>
        {/* <a className="btn hero-btn">
          Resume
        </a> */}
        <a
            className="btn hero-btn"
            href="/Bhanu_ReactJS_Developer_Resume.pdf"
            download="BhanuPrakash-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Main;
