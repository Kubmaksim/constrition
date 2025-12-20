import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import ServicesPreview from '../components/sections/ServicesPreview'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import CTA from '../components/sections/CTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </div>
  )
}

export default Home

