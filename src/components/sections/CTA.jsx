import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать свой проект?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Свяжитесь с нами сегодня и получите бесплатную консультацию по вашему проекту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Связаться с нами
            </Link>
            <Link
              to="/services"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium border-2 border-white hover:bg-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

