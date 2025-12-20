import { useState } from 'react'

const ProjectsFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'residential', label: 'Жилое строительство' },
    { id: 'commercial', label: 'Коммерческое' },
    { id: 'renovation', label: 'Реконструкция' },
  ]

  const handleFilter = (filterId) => {
    setActiveFilter(filterId)
    if (onFilterChange) {
      onFilterChange(filterId)
    }
  }

  return (
    <div className="container-custom py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilter(filter.id)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              activeFilter === filter.id
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProjectsFilter

