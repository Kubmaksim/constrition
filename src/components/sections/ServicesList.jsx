const ServicesList = () => {
  const services = [
    {
      title: 'Строительство домов',
      description: 'Проектирование и строительство частных домов, коттеджей и дач любой сложности',
      features: ['Индивидуальное проектирование', 'Строительство под ключ', 'Гарантия на все работы'],
      icon: '🏠',
    },
    {
      title: 'Ремонт и отделка',
      description: 'Качественный ремонт и отделка помещений с использованием современных материалов',
      features: ['Дизайн-проект', 'Все виды отделочных работ', 'Мебель на заказ'],
      icon: '🔨',
    },
    {
      title: 'Коммерческое строительство',
      description: 'Строительство офисных зданий, торговых центров, складов и производственных помещений',
      features: ['Проектирование', 'Строительство', 'Сдача под ключ'],
      icon: '🏢',
    },
    {
      title: 'Реконструкция',
      description: 'Реконструкция и модернизация существующих зданий и сооружений',
      features: ['Техническое обследование', 'Проектирование', 'Выполнение работ'],
      icon: '🔧',
    },
    {
      title: 'Инженерные системы',
      description: 'Установка и монтаж всех видов инженерных систем',
      features: ['Отопление и вентиляция', 'Электрика', 'Водоснабжение и канализация'],
      icon: '⚙️',
    },
    {
      title: 'Благоустройство территории',
      description: 'Ландшафтный дизайн и благоустройство прилегающих территорий',
      features: ['Ландшафтное проектирование', 'Озеленение', 'Малые архитектурные формы'],
      icon: '🌳',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:bg-primary-50 transition-colors duration-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList

