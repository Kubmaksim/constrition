import { Link } from 'react-router-dom'

const ServicesPreview = () => {
  const services = [
    {
      title: 'Construction of houses',
      description: 'Full cycle construction of private houses and cottages',
      icon: '🏠',
    },
    {
      title: 'Repair and finishing',
      description: 'High-quality repairs and finishing of premises of any complexity',
      icon: '🔨',
    },
    {
      title: 'Commercial construction',
      description: 'Construction of office buildings, warehouses and shopping centers',
      icon: '🏢',
    },
  ]

  return (
    <section className="section-padding bg-[#fed01f]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A wide range of construction services for private and commercial clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview

