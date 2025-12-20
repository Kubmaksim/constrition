const ContactMap = () => {
  return (
    <section className="bg-gray-100">
      <div className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          Как нас найти
        </h2>
        <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-200">
          {/* Placeholder for map - replace with actual map integration (Google Maps, Yandex Maps, etc.) */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-primary-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-gray-700 font-medium">
                г. Москва, ул. Примерная, д. 1
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Интегрируйте карту Google Maps или Yandex Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap

