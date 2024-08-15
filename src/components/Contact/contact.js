import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

function Contact() {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies
          some of the notable companies i have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="walmart" className="clientImg" />
          <img src={Adobe} alt="adobe" className="clientImg" />
          <img src={Microsoft} alt="microsoft" className="clientImg" />
          <img src={Facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work Opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YouTubeIcon} alt="YouTube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
