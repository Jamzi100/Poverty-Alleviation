import Image from "../assets/helping.jpeg";

export default function AboutHero() {
  return (
      <section className="relative h-[450px]">
        <img
          src={Image}
          alt="Helping hands"
          className="w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center drop-shadow-[4px_4px_0px_black]">
          <h1 className="text-6xl font-extrabold text-white">
            Overview Of HopeBridge
          </h1>

        <p className="mt-4 max-w-2xl text-3xl text-gray-200">
    Empowering communities, reducing poverty, and creating lasting opportunities for a better future.
  </p>
        </div>
        </section>
  );
}
