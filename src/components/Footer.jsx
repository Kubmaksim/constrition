import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { path: '/about', label: 'О нас' },
      { path: '/services', label: 'Услуги' },
      { path: '/projects', label: 'Проекты' },
      { path: '/contact', label: 'Контакты' },
    ],
    legal: [
      { path: '#', label: 'Политика конфиденциальности' },
      { path: '#', label: 'Условия использования' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10flex items-center justify-center">
                <span className=""><img src="public/cerna.logo.pruhledne.png" alt="logo" /></span>
              </div>
              <span className="text-xl font-bold text-white">
                Swemy
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональные строительные услуги с гарантией качества.
              Ваш надежный партнер в строительстве.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-primary-400">Телефон:</span> +7 (999) 123-45-67
              </li>
              <li>
                <span className="text-primary-400">Email:</span> info@sireconstruction.ru
              </li>
              <li>
                <span className="text-primary-400">Адрес:</span> г. Москва, ул. Примерная, д. 1
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} SIRE Construction. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

