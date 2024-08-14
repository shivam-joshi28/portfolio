import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skilltitle">What i do</span>
      <span className="skillDesc">
        I am skilled and passionate web developer
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quidem possimus quasi, laudantium a porro!{" "}
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>
              this is demo text Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate, veritatis!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Application design</h2>
            <p>
              this is demo text Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum, voluptatem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
