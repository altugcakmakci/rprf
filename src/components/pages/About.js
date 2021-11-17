import React from 'react';
import picture from '../../images/altug.jpg'; 

export default function About() {
  return (
    <div className="about">
        <h2>About me!</h2>
        <img src={picture} className="center" alt="Altug Cakmakci"/>
        <p className="center" >Hello! My name is Altug, and I am a Toronto based freelancer. I work remotely on projects for clients all over the world.</p>
        <p className="center" >I have a diverse set of skills, ranging from design to HTML, CSS, javascript, java, Node, Express, JQuery, Bootstrap, SQL and to custom module development and project and product management.</p>
    </div>
  );
}
