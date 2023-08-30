import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-section">
            <span className="contact-icon">
              <BiSolidPhoneCall />
            </span>
            <h2>Contactez-nous par téléphone</h2>
            <h3>06 73 06 41 29</h3>
          </div>
          <div className="divider"></div>
          <div className="contact-section">
            <span className="contact-icon">
              {" "}
              <HiMail />
            </span>
            <h2>Nous contacter</h2>
            <h3>theo@gmail.com</h3>
            <button>CONTACT</button>
          </div>
          <div className="divider"></div>
          <div className="contact-section">
            <span className="contact-icon">
              {" "}
              <AiFillHome />
            </span>
            <h2>Notre équipe</h2>
            <h3>36 allée des écoliers</h3>
            <h3>54000 Nancy</h3>
            <button>PLAN</button>
          </div>
        </div>
        <div className="contact-socials">
          <NavLink target="_blank" to="https://github.com/Thebas57">
            <FaGithub />
          </NavLink>
          <NavLink
            target="_blank"
            to="https://www.linkedin.com/in/th%C3%A9o-helf-446a51205/"
          >
            <FaLinkedin />
          </NavLink>
          <NavLink target="_blank" to="https://www.facebook.com/theo.helf/">
            <FaFacebook />
          </NavLink>
          <NavLink target="_blank" to="https://www.instagram.com/teopianno/">
            <FaInstagramSquare />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
