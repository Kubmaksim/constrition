const ServicesProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Бесплатная консультация и обсуждение ваших потребностей',
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разработка детального проекта с учетом всех требований',
    },
    {
      number: '03',
      title: 'Согласование',
      description: 'Согласование проекта и сметы, подписание договора',
    },
    {
      number: '04',
      title: 'Выполнение работ',
      description: 'Качественное выполнение всех работ в установленные сроки',
    },
    {
      number: '05',
      title: 'Сдача объекта',
      description: 'Приемка работ и передача готового объекта заказчику',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс работы от консультации до сдачи объекта
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-primary-200 -z-10" />
              )}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesProcess

