import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutContent from "../Components/AboutContent"
import Mission from "../Components/Mission"
import WhatWeDo from "../Components/WhatWeDo"
import Vision from "../Components/Vision"

function About() {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <Mission />
      <WhatWeDo />
      <Vision />
    </div>
  );
}

export default About;