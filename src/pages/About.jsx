import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutContent from "../Components/AboutContent"
import Mission from "../Components/Mission"
import WhatWeDo from "../Components/WhatWeDo"

function About() {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <Mission />
    </div>
  );
}

export default About;