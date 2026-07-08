import Image from "../assets/helping.jpeg";

export default function AboutHero() {
  return (
    <section className="relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black/50">
        <img src={Image} alt="helping hands" className="w-full h-60 overflow-hidden object-cover relative" />
        </div>
        <p className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 pb-30 font-extrabold text-6xl [text-shadow:6px_6px_12px_rgba(0,0,0,1)]">
          Overview of HopeBridge
        </p>
        <h2> 
          About HopeBridge
        </h2>
        <p>
          At HopeBridge, we believe that everyone deserves the opportunity to live with dignity, hope, and purpose. Our mission is to reduce poverty by connecting vulnerable individuals and families with the resources, support, and opportunities they need to build a better future.

We are committed to creating lasting change through education, food assistance, healthcare support, skills development, and community empowerment. Rather than providing temporary relief alone, we focus on sustainable solutions that help people become self-reliant and improve their quality of life.

Our work is driven by compassion, integrity, and a deep belief that every act of kindness can make a meaningful difference. By partnering with volunteers, donors, and local communities, HopeBridge strives to inspire hope, transform lives, and build stronger communities where everyone has the chance to thrive.

Together, we can bridge the gap between hardship and opportunity—one person, one family, and one community at a time.
        </p>
    </section>
  )
}