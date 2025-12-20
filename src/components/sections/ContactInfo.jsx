const ContactInfo = () => {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Телефон',
      content: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@sireconstruction.ru',
      link: 'mailto:info@sireconstruction.ru',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Адрес',
      content: 'г. Москва, ул. Примерная, д. 1',
      link: '#',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null,
    },
  ]

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Контактная информация
      </h2>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
          >
            <div className="text-primary-600 flex-shrink-0 mt-1">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-primary-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">
          Нужна консультация?
        </h3>
        <p className="text-gray-600 mb-4">
          Свяжитесь с нами, и мы ответим на все ваши вопросы
        </p>
        <a
          href="tel:+79991234567"
          className="inline-block btn-primary"
        >
          Позвонить сейчас
        </a>
      </div>
    </div>
  )
}

export default ContactInfo

