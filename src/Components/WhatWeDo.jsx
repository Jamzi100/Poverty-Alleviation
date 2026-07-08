import Food from "../assets/food.jpg"
import Education from "../assets/Education.jpg"
import HealthCare from "../assets/HealthCare.jpg"
import Housing from "../assets/Housing.jpeg"
import Grant from "../assets/Grant.jpg"
import Skill from "../assets/Skills.jpg"
import ServiceCard from "./ServiceCard"


export default function WhatWeDo(){
    return(
        <section>
            <h2 className="text-5xl font-bold text-center text-red-800 mb-8 spacing-y-4 pt-16">WHAT WE DO</h2>

            <p className="text-2xl text-gray-600 text-center mb-12">
                Creating lasting change by empowering individuals, strengthening communities, and providing sustainable solutions to overcome poverty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
  image={Food}
  title="Food Assistance"
  description="Providing nutritious meals..."
  description={[
    "providing access to nutritious meals and food resources to individuals and families in need, ensuring no one goes hungry.",
    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
      <li>Emergency Food Relief</li>
  <li>Nutritious Meal Distribution</li>
  <li>Food Pantry Support</li>
  <li>Community Feeding Programs</li>
</ul>
  ]}
/>

<ServiceCard
  image={Education}
  title="Education Support"
  description={[
    "Empowering individuals through access to quality education and learning opportunities.",
    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
      <li>Scholarship Programs</li>
      <li>Adult Education Classes</li>
      <li>Tutoring and Academic Support</li>
      <li>Library and Resource Centers</li>
    </ul>
  ]}
/>

<ServiceCard
  image={HealthCare}
  title="Healthcare Services"
  description={[
    "Providing essential healthcare services and medical outreach to underserved communities.",
    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
      <li>Medical Clinics</li>
      <li>Health Education Workshops</li>
      <li>Preventive Care Programs</li>
      <li>Emergency Medical Response</li>
    </ul>
  ]}
/>

<ServiceCard
  image={Housing}
  title="Housing Assistance"
  description={[
    "Providing affordable and safe housing solutions to individuals and families in need.",
    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
      <li>Emergency Shelter Services</li>
      <li>Subsidized Housing Programs</li>
      <li>Homeless Outreach and Support</li>
      <li> Housing Counseling and Case Management</li>
    </ul>
  ]}
/>

<ServiceCard
  image={Grant}
  title="Micro Grants"
  description={[
    "Providing small financial grants to support entrepreneurial initiatives and community projects.",
    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
      <li>Startup Funding</li>
      <li>Community Project Grants</li>
      <li>Small Business Development</li>
      <li>Innovation and Research Support</li>
    </ul>
  ]}
/>

<ServiceCard
  image={Skill}
  title="Skills Training"
  description={[
    "Providing training and development opportunities to enhance employability and life skills.",
    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
      <li>Job Readiness Training</li>
      <li>Technical Skills Development</li>
      <li>Leadership and Management Training</li>
      <li>Entrepreneurship and Business Skills</li>
    </ul>
  ]}
/>
</div>
        </section>
    )
}