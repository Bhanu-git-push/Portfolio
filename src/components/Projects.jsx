import React from "react";
import { project } from "../data";

const Projects = () => {
  return (
    <section id="project">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="section-center featured-center">
        {project.map((pro) => {
          return (
            <article className="tour-card" key={pro.id}>
              <div className="tour-img-container">
                <img src={pro.image} alt="" className="tour-img" />
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <p>{pro.title}</p>
                </div>
                <p>{pro.info}</p>
                <a href={pro.git} target="_blank">Git hub link</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
