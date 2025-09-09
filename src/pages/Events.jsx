import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, Star, Filter } from 'lucide-react'
import { format, isToday, isTomorrow, isThisWeek } from 'date-fns'
import { es } from 'date-fns/locale'

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedMonth, setSelectedMonth] = useState(new Date())

  const events = [
    {
      id: 1,
      title: 'Festival de la Chicha',
      date: new Date(2024, 11, 15),
      time: '10:00 - 18:00',
      location: 'Plaza 25 de Mayo',
      description: 'Celebración tradicional con música, danza y degustación de chicha.',
      category: 'Cultural',
      price: 'Gratis',
      capacity: 500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Feria de Artesanías',
      date: new Date(2024, 11, 20),
      time: '9:00 - 19:00',
      location: 'Mercado Central',
      description: 'Exposición y venta de artesanías tradicionales de la región.',
      category: 'Comercial',
      price: 'Gratis',
      capacity: 200,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Concierto de Música Andina',
      date: new Date(2024, 11, 25),
      time: '19:00 - 22:00',
      location: 'Teatro Municipal',
      description: 'Presentación de grupos musicales locales con instrumentos tradicionales.',
      category: 'Musical',
      price: 'Bs. 50',
      capacity: 300,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Tour Histórico Nocturno',
      date: new Date(2024, 11, 28),
      time: '18:00 - 21:00',
      location: 'Centro Histórico',
      description: 'Recorrido guiado por los lugares más importantes de Sucre.',
      category: 'Turístico',
      price: 'Bs. 30',
      capacity: 25,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      title: 'Taller de Cerámica',
      date: new Date(2024, 11, 30),
      time: '14:00 - 17:00',
      location: 'Centro Cultural',
      description: 'Aprende técnicas tradicionales de cerámica con artesanos locales.',
      category: 'Educativo',
      price: 'Bs. 80',
      capacity: 15,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578320872916-bb61b562205e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      title: 'Festival Gastronómico',
      date: new Date(2025, 0, 5),
      time: '11:00 - 20:00',
      location: 'Parque Bolívar',
      description: 'Degustación de platos típicos de la región de Chuquisaca.',
      category: 'Gastronómico',
      price: 'Bs. 40',
      capacity: 400,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const categories = ['Todos', 'Cultural', 'Comercial', 'Musical', 'Turístico', 'Educativo', 'Gastronómico']

  const filteredEvents = events.filter(event => 
    selectedCategory === 'Todos' || event.category === selectedCategory
  )

  const getEventStatus = (date) => {
    if (isToday(date)) return 'Hoy'
    if (isTomorrow(date)) return 'Mañana'
    if (isThisWeek(date)) return 'Esta semana'
    return 'Próximamente'
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Hoy': return 'bg-red-100 text-red-800'
      case 'Mañana': return 'bg-orange-100 text-orange-800'
      case 'Esta semana': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calendario de Eventos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre los eventos culturales, festivales y actividades que Sucre tiene para ofrecer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filtrar por categoría:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="text-sm text-gray-600">
              {filteredEvents.length} evento{filteredEvents.length !== 1 ? 's' : ''} encontrado{filteredEvents.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => {
              const status = getEventStatus(event.date)
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                        {status}
                      </span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">
                          {format(event.date, 'dd MMMM yyyy', { locale: es })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Capacidad: {event.capacity}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700">{event.rating}</span>
                      </div>
                      <div className="text-lg font-semibold text-primary-600">
                        {event.price}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes un evento que compartir?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Si eres organizador de eventos en Sucre, contáctanos para incluir tu evento en nuestro calendario
          </p>
          <button className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all">
            Contactar Organizadores
          </button>
        </div>
      </section>
    </div>
  )
}

export default Events
