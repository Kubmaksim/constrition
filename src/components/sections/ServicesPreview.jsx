import { Link } from 'react-router-dom'

const ServicesPreview = () => {
  const services = [
    {
      title: 'Строительство домов',
      description: 'Полный цикл строительства частных домов и коттеджей',
      icon: '🏠',
    },
    {
      title: 'Ремонт и отделка',
      description: 'Качественный ремонт и отделка помещений любой сложности',
      icon: '🔨',
    },
    {
      title: 'Коммерческое строительство',
      description: 'Строительство офисных зданий, складов и торговых центров',
      icon: '🏢',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Широкий спектр строительных услуг для частных и коммерческих клиентов
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
        <div className="text-center">
          <Link to="/services" className="btn-primary">
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview

