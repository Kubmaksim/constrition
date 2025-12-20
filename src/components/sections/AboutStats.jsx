const AboutStats = () => {
  const stats = [
    { value: '500+', label: 'Завершенных проектов' },
    { value: '15+', label: 'Лет опыта' },
    { value: '200+', label: 'Довольных клиентов' },
    { value: '100%', label: 'Гарантия качества' },
  ]

  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats

