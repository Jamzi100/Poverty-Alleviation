export default function Impact() {
  return (
    <section className="bg-red-900 py-14 sm:py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          OUR IMPACT
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-red-800 rounded-xl p-8 text-center shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold">10,000+</p>
            <p className="mt-3 text-lg">Lives Impacted</p>
          </div>

          <div className="bg-red-800 rounded-xl p-8 text-center shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold">500+</p>
            <p className="mt-3 text-lg">Communities Supported</p>
          </div>

          <div className="bg-red-800 rounded-xl p-8 text-center shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold">1,500+</p>
            <p className="mt-3 text-lg">Youth Empowered</p>
          </div>

          <div className="bg-red-800 rounded-xl p-8 text-center shadow-lg">
            <p className="text-4xl lg:text-5xl font-bold">95%</p>
            <p className="mt-3 text-lg">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}