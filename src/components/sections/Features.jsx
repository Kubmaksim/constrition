const Features = () => {
  const features = [
    {
      icon: (
        <div className="w-[40px]">
                    <img src="/public/innovation+and+humility.png" alt="logo " />    
        </div>
      ),
      title: 'Quality assurance',
      description: 'All work is carried out in compliance with standards and with a quality guarantee',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Meeting deadlines',
      description: 'Strict adherence to contractual deadlines for completion of work',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Experienced team',
      description: 'Professional specialists with many years of experience.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable prices',
      description: 'Fair and transparent prices with no hidden charges',
    },
  ]

  return (
    <section className="section-padding bg-[#fed01f]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2c4f] mb-4">
          General Contracting Company based in Calgary, Alberta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Simple projects? Not our style. At our core, we're problem-solvers who thrive on specialized, civil,
           and commercial projects that demand ingenuity. Our construction management and general contracting 
           services are tailored to simplify the complex. Expect not just completion, but a masterful execution 
           that respects your resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#29292b] hover:bg-primary-50 transition-colors duration-200"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

