import React from 'react';
import '../styles/Navbar.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin,AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
      <div>
          <footer>
    <h3>
        Designed with care
      </h3>
      <section class="links">
        <a href='https://github.com/altugcakmakci'><GoMarkGithub /></a>
        <a href="https://ca.linkedin.com/in/altug-cakmakci-990a54a"><AiFillLinkedin /></a>
        <a href="https://www.facebook.com/altug.cakmakci"><AiFillFacebook /></a>
       </section>
    </footer>
    </div>
  );
}

export default Footer;
