import DonateHero from "../Components/DonateHero";
import WhyDonate from "../Components/WhyDonate";
import DonationImpact from "../Components/DonationImpact";
import DonationOption from "../Components/DonationOption";
import DonationMethod from "../Components/DonationMethod";
import FAQ from "../Components/FAQ";
import DonateCTA from "../Components/DonateCTA"

export default function Donate() {
  return (
    <>
      <DonateHero />
      <WhyDonate />
      <DonationImpact />
      <DonationOption />
      <DonationMethod />
      <FAQ />
      <DonateCTA />
    </>
  );
}