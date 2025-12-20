import { useState } from 'react'

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Солнечный"',
      category: 'residential',
      location: 'Москва',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    },
    {
      id: 2,
      title: 'Офисный центр "Бизнес Парк"',
      category: 'commercial',
      location: 'Санкт-Петербург',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      id: 3,
      title: 'Частный дом в Подмосковье',
      category: 'residential',
      location: 'Подмосковье',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    },
    {
      id: 4,
      title: 'Торговый центр "Мега"',
      category: 'commercial',
      location: 'Казань',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    },
    {
      id: 5,
      title: 'Реконструкция исторического здания',
      category: 'renovation',
      location: 'Москва',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      id: 6,
      title: 'Коттеджный поселок "Эко-Парк"',
      category: 'residential',
      location: 'Ленинградская область',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <ProjectsFilter onFilterChange={setActiveFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm text-primary-300 mb-2 block">
                    {project.location} • {project.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <span className="text-sm text-primary-600 mb-2 block">
                  {project.location} • {project.year}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Проекты в этой категории пока отсутствуют
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectsGrid

