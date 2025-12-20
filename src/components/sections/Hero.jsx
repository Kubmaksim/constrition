import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-[url('/HOME.page.jpeg')] bg-cover bg-center bg-no-repeat   from-[#fed01f] via-[#fed01f] to-[#fed01f]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-[#3A3A3a] mt-20 mb-[320px] leading-tight">
          Your Vision, our expertise 
          united in building excellence
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Связаться с нами
            </Link>
            <Link to="/projects" className="btn-secondary">
              Наши проекты
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fed01f] to-transparent" />
    </section>
  )
}

export default Hero

