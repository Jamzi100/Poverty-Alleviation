
export default function ServicePreviewCard({ icon, title, description}) {
    return(
        <div className="bg-white rounded-xl shadow-lg min-h-[320px] overflow-hidden transition-all duration-300  border border-transparent hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
<div className="flex flex-col items-center justify-center mt-4">
                <div className="bg-red-900 text-white p-4 rounded-full hover:transition-y-2 duration-300 hover:scale-110 w-auto h-auto text-lg">
                    {icon}
                </div>
            
             <div className="p-4">
        <h3 className="text-3xl font-bold text-red-800 text-center">{title}</h3>

        <p className="mt-4 text-gray-600 text-2xl text-center">
          {description}
        </p>
      </div>
        </div>
        </div>
    )
}  