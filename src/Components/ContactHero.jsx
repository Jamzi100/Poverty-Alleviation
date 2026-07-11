import Image from "../assets/helping.jpeg";

export default function ContactHero() {
  return (
    <section className="relative h-[450px]">
      <img
        src={Image}
        alt="Contact HopeBridge"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 drop-shadow-[4px_4px_0px_black]">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-lg md:text-xl max-w-3xl">
          We'd love to hear from you. Whether you have questions, need
          assistance, or want to partner with HopeBridge, we're here to help.
        </p>
      </div>
    </section>
  );
}