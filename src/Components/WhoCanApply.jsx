import {
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaWheelchair,
  FaHandsHelping,
  FaChild,
  FaHandHoldingHeart,
} from "react-icons/fa";
import ServicePreviewCard from "./ServicePreviewCard";

export default function WhoCanApply() {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-red-900 text-center">
                    Who Can Apply for Assistance?
                </h2>
                <p className="mt-4 text-lg text-gray-700 text-center">
                    HopeBridge is committed to supporting individuals and families in need. Our programs are designed to assist those facing financial hardship, health challenges, educational barriers, and other circumstances that require immediate relief and long-term support.
                </p>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <ServicePreviewCard 
                            icon={<FaUsers />}
                            title="Individuals in Need"
                            description="People facing financial hardship or emergency situations."
                        />
                        <ServicePreviewCard 
                            icon={<FaGraduationCap />}
                            title="Students"
                            description="Those seeking educational support and resources."
                        />
                        <ServicePreviewCard 
                            icon={<FaBriefcase />}
                            title="Job Seekers"
                            description="Individuals looking for employment opportunities and career development."
                        />
                        <ServicePreviewCard 
                            icon={<FaWheelchair />}
                            title="People with Disabilities"
                            description="Individuals with physical or mental disabilities requiring support."
                        />
                        <ServicePreviewCard 
                            icon={<FaHandsHelping />}
                            title="Families"
                            description="Households facing financial difficulties or other challenges."
                        />
                        <ServicePreviewCard 
                            icon={<FaChild />}
                            title="Children"
                            description="Young individuals in need of support and resources."
                        />
                        <ServicePreviewCard 
                            icon={<FaHandHoldingHeart />}
                            title="Elderly"
                            description="Senior citizens requiring assistance and care."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
