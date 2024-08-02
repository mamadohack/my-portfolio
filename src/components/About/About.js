import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Kermadi Mohammed</strong> I am a
            passionate Frontend Developer with a keen eye for design and a love
            for crafting intuitive and responsive user interfaces. With a strong
            foundation in HTML, CSS, and JavaScript and React , Next<p style={{marginTop:"0.8rem"}}>
              I strive to bring creative
              concepts to life while ensuring optimal performance and user
              experience. I enjoy collaborating with diverse teams and
              continuously learning new technologies to stay ahead in this
              fast-paced industry.
            </p><p style={{marginTop:"0.8rem"}}>
              My goal is to create seamless and visually
              appealing digital experiences that make a real impact. When I'm not
              coding, you can find me exploring new design trends, contributing to
              open-source projects, or indulging in my love for coffee and outdoor
              adventures.
            </p>
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
