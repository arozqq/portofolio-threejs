import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ajib Roziq</span> 🍻
      <br />A Software Engineer from Indonesia
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many project and picked up many skills a long the way"
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text="Multiple project to success to over the years"
      link={"/projects"}
      btnText={"Visit my portofolio"}
    />
  ),
  4: (
    <InfoBox
      text="Looking for some collaboration project with me ?"
      link={"/contact"}
      btnText={"Let's Talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
