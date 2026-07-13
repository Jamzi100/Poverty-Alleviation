export default function ServiceCard({ image, title, description }) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-4 text-2xl font-bold text-red-800">
          {title}
        </h3>

        <div className="flex-1 text-gray-600 leading-8">
          {description}
        </div>
      </div>

    </div>
  );
}