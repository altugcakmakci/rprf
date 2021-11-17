import React from 'react';
import '../../styles/Portfolio.css';
import { GoMarkGithub } from "react-icons/go";

export default function Portfolio({ projects }) {
  return (
    <div className="mywork">
      <h2>My Work</h2>
      <section className="item-container">
        {projects.map((project) => (
          <article className={project.classType}>
            <h3>{project.name}</h3>
            <a href={project.link}><img src={project.image} className="center" alt="Altug Cakmakci" /></a>
            <a href={project.github}><GoMarkGithub /> </a>
          </article>
        ))}
      </section>
    </div>
  );
}
