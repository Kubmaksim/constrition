import { Link } from 'react-router-dom'

const ProjectsPreview = () => {
  const projects = [
    {
      title: 'Жилой комплекс "Солнечный"',
      category: 'Жилое строительство',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    },
    {
      title: 'Офисный центр "Бизнес Парк"',
      category: 'Коммерческое строительство',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      title: 'Частный дом в Подмосковье',
      category: 'Частное строительство',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши проекты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реализованные проекты, которые говорят о нашем профессионализме
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm text-primary-300 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm text-primary-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/projects" className="btn-primary">
            Все проекты
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview

