import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8">

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="text-center flex flex-col items-center">
  <FaPhone className="text-red-600 text-4xl" />
                <a
  href="mailto:support@hopebridge.org"
  className="hover:text-red-400 transition"
>
  <h3 className="text-2xl font-semibold mb-2">
    Phone Number
  </h3>
</a>

<p className="text-gray-600">
    +234 913 280 4333
  </p>
</div>

<div className="text-center flex flex-col items-center">
  <FaEnvelope className="text-red-600 text-4xl" />
                <a
  href="mailto:support@hopebridge.org"
  className="hover:text-red-400 transition"
>
  <h3 className="text-2xl font-semibold mb-2">
    Email
  </h3>
</a>

<p className="text-gray-600">
    support@hopebridge.org
  </p>
</div>

<div className="text-center">
  <FaLocationDot className="text-4xl text-red-600 mx-auto mb-4" />

  <h3 className="text-2xl font-semibold mb-2">
    Address
  </h3>

  <p className="text-gray-600">
    Abuja, Nigeria
  </p>
</div>

<div className="text-center">
  <FaClock className="text-4xl text-red-600 mx-auto mb-4" />

  <h3 className="text-2xl font-semibold mb-2">
    Office Hours
  </h3>

  <p className="text-gray-600">
    Monday - Friday
  </p>

  <p className="text-gray-600">
    8:00 AM - 5:00 PM
  </p>
</div>

</div>

    </div>
  );
}