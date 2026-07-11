import Image from "../assets/GettingHelp.jpg";

export default function GetHelpHero() {
  return (
    <section className="relative h-[450px]">
      <img
        src={Image}
        alt="Helping a family"
        className="w-full h-full object-cover brightness-50"
      />
      

      <div className="absolute inset-0 bg-black/10"></div>

      <div className="absolute inset-0 flex items-center justify-center drop-shadow-[4px_4px_0px_black]">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white [text-shadow:4px_4px_10px_rgba(0,0,0,0.9)]">
            We're Here to Help
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-gray-200 leading-8">
            HopeBridge is committed to supporting individuals and
            families facing hardship by connecting them with
            resources, opportunities, and sustainable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}