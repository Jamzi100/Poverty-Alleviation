import {
    FaUtensils,
    FaHeartbeat,
    FaGraduationCap,
    FaTools,
    FaHome,
    FaHandHoldingUsd,
} from "react-icons/fa";
import ServicePreviewCard from "./ServicePreviewCard";


export default function AssistanceType() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-red-900 text-center">
                    Types of Assistance Available
                </h2>

                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700 text-center leading-8">
  HopeBridge provides a range of assistance programs designed to
  support individuals and families facing hardship. Select the type
  of assistance that best matches your current needs when completing
  your application.
</p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServicePreviewCard
  icon={<FaUtensils />}
  title="Food Assistance"
  description="Receive emergency food supplies, nutritious meals, and essential groceries."
/>

<ServicePreviewCard
  icon={<FaHeartbeat />}
  title="Healthcare Assistance"
  description="Access basic healthcare services, medical outreach, and health education."
/>

<ServicePreviewCard
  icon={<FaGraduationCap />}
  title="Educational Support"
  description="Receive school supplies, scholarships, and learning opportunities."
/>

<ServicePreviewCard
  icon={<FaTools />}
  title="Skills Training"
  description="Learn vocational and entrepreneurial skills to become self-reliant."
/>

<ServicePreviewCard
  icon={<FaHome />}
  title="Community Development"
  description="Support for housing, clean water initiatives, and community projects."
/>

<ServicePreviewCard
  icon={<FaHandHoldingUsd />}
  title="Micro-Grants"
  description="Financial support for small businesses and income-generating activities."
/>
                </div>
            </div>
        </div>
    );
}
