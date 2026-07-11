import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutSec from "../Components/AboutSec";
import Impact from "../Components/Impact";
import HomeService from "../Components/HomeService";
import GetInvolved from "../Components/CallToAction";
import HopeForm from "../Components/HopeForm"

export default function Home() {
  return (
    <div>
        <Hero />
        <AboutSec />
        <Impact />
        <HomeService />
        <GetInvolved />
    </div>
  )   
}