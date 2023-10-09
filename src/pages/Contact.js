import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
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
    <motion.div
      className="contact"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <video autoPlay muted loop id="background-video">
        <source src="./img/haloween/fond.mp4" type="video/mp4" />
      </video>
      <div className="all-contact-container">
        <div class="container">
          <div className="grid-item">
            <span className="grid-icon">
              <AiFillHome />
            </span>
            <div className="grid-description">
              <p className="first">CARMAT</p>
              <p>Dynapôle de Ludres & Fléville</p>
              <p>472 rue Antoine de Lavoisier</p>
              <p>54710 Ludres</p>
            </div>
          </div>
          <div className="grid-item">
            <span className="grid-icon">
              <BiSolidPhoneCall />
            </span>
            <div className="grid-description">
              <p className="first">ESPACE VENTE</p>
              <p>Du Lundi au Samedi</p>
              <p>09h00 – 12h00</p>
              <p>14h00 – 18h00</p>
            </div>
          </div>
          <div className="grid-item">
            <span className="grid-icon">
              <HiMail />
            </span>
            <div className="grid-description">
              <p className="first">CONTACTEZ-NOUS</p>
              <p>+33 383 257 419</p>
              <p>contact@carmat.fr</p>
            </div>
          </div>
        </div>
        <div className="img-contact">
          <img src="./img/haloween/contact.png" alt="contacthalo" />
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-socials">
          <div className="contact-item">
            <NavLink target="_blank" to="https://github.com/Thebas57">
              <FaGithub />
            </NavLink>
          </div>
          <div className="contact-item">
            <NavLink
              target="_blank"
              to="https://www.linkedin.com/in/th%C3%A9o-helf-446a51205/"
            >
              <FaLinkedin />
            </NavLink>
          </div>
          <div className="contact-item">
            <NavLink target="_blank" to="https://www.facebook.com/theo.helf/">
              <FaFacebook />
            </NavLink>
          </div>
          <div className="contact-item">
            <NavLink target="_blank" to="https://www.instagram.com/teopianno/">
              <FaInstagramSquare />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="back-contact">
        <NavLink to="/">
          <button className="btn btn-5 btn-5a icon-cart">
            <span>Accueil</span>
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Contact;
