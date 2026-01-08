import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-[url('/HOME.page.jpeg')] bg-cover bg-center bg-no-repeat   from-[[#fed01f]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  text-[#e6a500] mt-20 mb-[370px] leading-tight">
          Your Vision, our expertise 
          united in building excellence
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fed01f] to-transparent" />
    </section>
  )
}

export default Hero

