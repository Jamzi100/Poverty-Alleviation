import Image from "../assets/helping.jpeg";

export default function AboutHero() {
  return (
    <section className="relative h-[280px] sm:h-[380px] md:h-[450px] lg:h-[550px] overflow-hidden">
      <img
        src={Image}
        alt="Helping hands"
        className="w-full h-full object-cover brightness-50"
      />

      
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Overview Of HopeBridge
        </h1>

        <p className="mt-4 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
          Empowering communities, reducing poverty, and creating lasting
          opportunities for a better future.
        </p>
      </div>
    </section>
  );
}