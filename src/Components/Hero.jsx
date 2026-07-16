import Image from "../assets/helping.jpeg";

function Hero() {
  return (
    <section className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
      <img
        src={Image}
        alt="HopeBridge Hero"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
}

export default Hero;