export default function ServiceCard({ image, title, description}) {
    return(
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img src={image} alt={title} className="w-100 h-70 object-cover rounded-2xl p-4" />


             <div className="p-4">
        <h3 className="text-3xl font-bold text-red-800">{title}</h3>

        <p className="mt-4 text-gray-600 text-2xl">
          {description}
        </p>
      </div>
        </div>
    )
}