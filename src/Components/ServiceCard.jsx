export default function ServiceCard({ image, title, description}) {
    return(
        <div>
            <img src={Image} alt={title} className="w-full h-56 object-cover" />

             <div className="p-6">
        <h3 className="text-3xl font-bold text-red-800">{title}</h3>

        <p className="mt-4 text-gray-600">
          {description}
        </p>
      </div>
        </div>
    )
}