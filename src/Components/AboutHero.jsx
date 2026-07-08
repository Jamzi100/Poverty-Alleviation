import Image from "../assets/helping.jpeg";

export default function AboutHero() {
  return (
    <section>
        <img src={Image} alt="helping hands" className="w-full h-60 overflow-hidden object-cover relative" />
        <p className="absolute top- right-1/2 transform drop-shadow-[4px_4px_0px_black] flex flex-col items-center justify-center text-white w-1/3 h-50 text-center text-3xl font-bold">
          Overview of HopeBridge
        </p>
        <h2> 
          About Homebridge
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