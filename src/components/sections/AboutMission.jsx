const AboutMission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Наша миссия
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Мы стремимся быть лидером в строительной индустрии, предоставляя
              нашим клиентам высококачественные услуги и инновационные решения.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Наша команда объединяет опытных специалистов, которые работают
              с полной отдачей и вниманием к деталям каждого проекта.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы ценим доверие наших клиентов и строим долгосрочные отношения,
              основанные на профессионализме и честности.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center">
            <span className="text-6xl">🏗️</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission

