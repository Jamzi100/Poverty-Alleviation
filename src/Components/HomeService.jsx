import {
  FaUtensils,
  FaHeartbeat,
  FaGraduationCap,
  FaTools,
  FaHome,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ServicePreviewCard from "./ServicePreviewCard";
import { FaArrowRight } from "react-icons/fa";

export default function HomeService() {
  return (
    <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <h2 className="text-3xl font-bold text-red-900">
        OUR SERVICES
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-8">
        Discover how HopeBridge is transforming lives through
        sustainable programs that provide immediate relief,
        empower individuals, and create lasting opportunities
        for communities to thrive.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

  <ServicePreviewCard 
  icon={<FaUtensils />}
  title="Food Assistance"
  description="Providing access to nutritious meals."
  />

  <ServicePreviewCard 
  icon={<FaHeartbeat />}
  title="Healthcare Services"
  description="Providing essential healthcare services."
  />

  <ServicePreviewCard 
  icon={<FaGraduationCap />}
  title="Education Support"
  description="Empowering individuals through access to quality education."
  />

  <ServicePreviewCard 
  icon={<FaTools />}
  title="Skills Training"
  description="Providing vocational training and skill development opportunities."
  />

  <ServicePreviewCard 
  icon={<FaHome />}
  title="Housing Assistance"
  description="Providing support for individuals and families in need of stable housing."
  />

  <ServicePreviewCard 
  icon={<FaHandHoldingUsd />}
  title="Financial Literacy"
  description="Offering education and resources to help individuals manage their finances effectively."
  />

</div>

<div className="text-center mt-24">
  <Link
    to="/about"
    className="inline-block bg-red-900 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300 hover:scale-105"
  >
    View All Services
  </Link>
</div>

  </div>
</section>
  )
}