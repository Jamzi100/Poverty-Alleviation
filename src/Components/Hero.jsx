import React from "react";
import Image from "../assets/poverty.webp";

function Hero() {
  return (
    <section className="h-screen">
      <img src={Image} alt="poverty" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[4px_4px_0px_black] flex flex-col items-center justify-center text-white w-1/3 h-50">
      <h2 className="text-4xl font-bold text-center mb-4">
        ❝ HOPE BEGINS WITH YOU ❞
      </h2>
      <p className="font-bold text-3xl text-center family-teko">
        <span className="">❝</span> Together we empower vulnerable communities
        through food assistance, education,
        healthcare, and sustainable livelihoods. <span>❞</span>
      </p>

      </div>
    </section>
  );
}

export default Hero;