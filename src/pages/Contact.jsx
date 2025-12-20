import ContactHero from '../components/sections/ContactHero'
import ContactForm from '../components/sections/ContactForm'
import ContactInfo from '../components/sections/ContactInfo'
import ContactMap from '../components/sections/ContactMap'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </div>
  )
}

export default Contact

