import Image from "../assets/volunteer.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function Mission(){
    return(
        <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-50 py-20">
            <div className="grid grid-cols-2  items-center">
                <div>
            <img src={Image} 
            alt="hopebridge volunteer" 
            className="w-100 h-100 object-cover rounded-full border-8 border-white shadow-2x"
            />
            </div>
        

            <div>
                <h2 className="text-5xl font-bold mb-6 text-red-800">OUR MISSION</h2>

                <div className="w-80 h-1 bg-red-800 rounded-full mt-3 mb-8"></div>

                <p className="text-2xl mb-6 text-gray-700">
                     At HopeBridge, we are committed to empowering low-income individuals and
    underserved communities through sustainable programs that create lasting
    change, such as:
                </p>
                <ul className="mb-12 leading-10">
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Skills Training
                    </li>
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Micro Grant for Small Businesses
                    </li>
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Food Assistance Programs
                    </li>
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Educational Support and Scholarship
                    </li>
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Community Development Project
                    </li>
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Health Care Services and Medical Outreach
                    </li>
                    <li className="flex items-center gap-3 text-2xl text-gray-700">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        Emergency Relief and Humanitarian Support
                    </li>
                </ul>
            </div>
            </div>
        </section>
    )
}