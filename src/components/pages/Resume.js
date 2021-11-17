import React from 'react';
import picture from '../../images/resume-image.jpeg';

export default function Resume({ proficiencies }) {
  return (
    <div className="about">
      <h2>Resume</h2>
      <a href='#'><img src={picture} className="center" alt="resume" /></a>
      <p> </p>
      <h2 className="left" >Proficiencies</h2>
      <ul className="list-group">
        {proficiencies.map((proficiency) => (
          <li className="list-group-item center prof-list">{proficiency.name}</li>
        ))}
      </ul>
    </div>
  );
}
