import Image from "../assets/helping.jpeg";

export default function DonateHero() {
  return (
    <section className="relative h-[450px]">
      <img
        src={Image}
        alt="People donating to support communities"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Every Donation Brings Hope
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Your generosity helps provide food, education, healthcare,
            shelter, and opportunities for individuals and families in
            need. Together, we can build stronger communities.
          </p>

        </div>
      </div>
    </section>
  );
}