import Image from "../assets/volunteer.jpg";

export default function AboutContent(){
    return(
        <section className="flex flex-col items-center justify-between text-center max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto py-18 px-6 ">
                <h2 className="text-5xl text-red-800 font-bold  mb-10">
          About HopeBridge
        </h2>

        <p className="text-gray-700 leading-8 text-2xl">
          At HopeBridge, we believe that everyone deserves the opportunity to
          live with dignity, hope, and purpose. Our mission is to reduce poverty
          by connecting vulnerable individuals and families with the resources,
          support, and opportunities they need to build a better future.

          <br /><br />

          We are committed to creating lasting change through education, food
          assistance, healthcare support, skills development, and community
          empowerment. Rather than providing temporary relief alone, we focus on
          sustainable solutions that help people become self-reliant and improve
          their quality of life.

          <br /><br />

          Our work is driven by compassion, integrity, and a deep belief that
          every act of kindness can make a meaningful difference. By partnering
          with volunteers, donors, and local communities, HopeBridge strives to
          inspire hope, transform lives, and build stronger communities where
          everyone has the chance to thrive.

          <br /><br />

          Together, we can bridge the gap between hardship and opportunity—one
          person, one family, and one community at a time.
        </p>
        </div>
        </section>
    )
}