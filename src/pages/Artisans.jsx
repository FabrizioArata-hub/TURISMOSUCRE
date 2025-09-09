import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Star, MapPin, Phone, Mail, Heart, Share2 } from 'lucide-react'

const Artisans = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('rating')

  const artisans = [
    {
      id: 1,
      name: 'María Elena Quispe',
      category: 'Cerámica',
      rating: 4.9,
      reviews: 127,
      location: 'Barrio San Roque',
      phone: '+591 4 1234567',
      email: 'maria.quispe@email.com',
      description: 'Especialista en cerámica tradicional con más de 20 años de experiencia.',
      specialties: ['Vasijas tradicionales', 'Figuras religiosas', 'Utensilios de cocina'],
      image: '/api/placeholder/300/300',
      featured: true,
      yearsExperience: 20
    },
    {
      id: 2,
      name: 'Carlos Mamani',
      category: 'Textiles',
      rating: 4.8,
      reviews: 89,
      location: 'Mercado Central',
      phone: '+591 4 2345678',
      email: 'carlos.mamani@email.com',
      description: 'Maestro tejedor especializado en aguayos y textiles andinos.',
      specialties: ['Aguayos', 'Ponchos', 'Mantas', 'Bolsas tradicionales'],
      image: '/api/placeholder/300/300',
      featured: false,
      yearsExperience: 15
    },
    {
      id: 3,
      name: 'Ana Condori',
      category: 'Joyería',
      rating: 4.7,
      reviews: 156,
      location: 'Centro Histórico',
      phone: '+591 4 3456789',
      email: 'ana.condori@email.com',
      description: 'Creadora de joyería en plata con diseños inspirados en la cultura indígena.',
      specialties: ['Collares de plata', 'Aretes tradicionales', 'Pulseras', 'Anillos'],
      image: '/api/placeholder/300/300',
      featured: true,
      yearsExperience: 12
    },
    {
      id: 4,
      name: 'Roberto Vargas',
      category: 'Madera',
      rating: 4.6,
      reviews: 73,
      location: 'Barrio San Sebastián',
      phone: '+591 4 4567890',
      email: 'roberto.vargas@email.com',
      description: 'Tallador de madera especializado en muebles y esculturas religiosas.',
      specialties: ['Muebles coloniales', 'Esculturas religiosas', 'Instrumentos musicales'],
      image: '/api/placeholder/300/300',
      featured: false,
      yearsExperience: 18
    },
    {
      id: 5,
      name: 'Elena Flores',
      category: 'Cuero',
      rating: 4.8,
      reviews: 94,
      location: 'Mercado Central',
      phone: '+591 4 5678901',
      email: 'elena.flores@email.com',
      description: 'Artesana del cuero con técnicas tradicionales de curtido y diseño.',
      specialties: ['Zapatos tradicionales', 'Cinturones', 'Bolsas de cuero', 'Monederos'],
      image: '/api/placeholder/300/300',
      featured: false,
      yearsExperience: 14
    },
    {
      id: 6,
      name: 'José Huanca',
      category: 'Metal',
      rating: 4.5,
      reviews: 67,
      location: 'Barrio San Roque',
      phone: '+591 4 6789012',
      email: 'jose.huanca@email.com',
      description: 'Herrero tradicional especializado en herramientas y decoraciones metálicas.',
      specialties: ['Herramientas agrícolas', 'Decoraciones metálicas', 'Candados tradicionales'],
      image: '/api/placeholder/300/300',
      featured: false,
      yearsExperience: 22
    }
  ]

  const categories = ['Todos', 'Cerámica', 'Textiles', 'Joyería', 'Madera', 'Cuero', 'Metal']

  const filteredArtisans = artisans
    .filter(artisan => 
      (selectedCategory === 'Todos' || artisan.category === selectedCategory) &&
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'experience':
          return b.yearsExperience - a.yearsExperience
        case 'reviews':
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

  const featuredArtisans = artisans.filter(artisan => artisan.featured)

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
              Catálogo de Artesanos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre el talento y la creatividad de los artesanos de Sucre. 
              Cada pieza cuenta una historia única de tradición y cultura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Artisans */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artesanos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtisans.map((artisan, index) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white border-2 border-primary-200 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                    Destacado
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{artisan.rating}</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {artisan.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{artisan.name}</h3>
                  <p className="text-primary-600 font-medium">{artisan.category}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{artisan.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{artisan.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{artisan.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artesanos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="rating">Mejor calificados</option>
                <option value="experience">Más experiencia</option>
                <option value="reviews">Más reseñas</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Artisans */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Todos los Artesanos</h2>
            <span className="text-gray-600">
              {filteredArtisans.length} artesano{filteredArtisans.length !== 1 ? 's' : ''} encontrado{filteredArtisans.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtisans.map((artisan, index) => (
              <motion.div
                key={artisan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                      {artisan.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">{artisan.rating}</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {artisan.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{artisan.name}</h3>
                    <p className="text-gray-600 text-sm">{artisan.yearsExperience} años de experiencia</p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{artisan.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-1">
                      {artisan.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{artisan.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{artisan.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{artisan.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">{artisan.reviews} reseñas</span>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Eres artesano en Sucre?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a nuestra plataforma y muestra tu trabajo al mundo. 
            Ayudamos a conectar artesanos con visitantes y compradores.
          </p>
          <button className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all">
            Registrarse como Artesano
          </button>
        </div>
      </section>
    </div>
  )
}

export default Artisans
