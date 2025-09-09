import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Palette, Star, Users, Clock } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Mapas Interactivos',
      description: 'Explora los lugares más emblemáticos de Sucre con mapas detallados y rutas personalizadas.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Calendario de Eventos',
      description: 'Mantente al día con los festivales, ferias y eventos culturales de la ciudad.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Palette,
      title: 'Catálogo de Artesanías',
      description: 'Descubre las obras de arte únicas creadas por artesanos locales de Sucre.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    { icon: Users, value: '50+', label: 'Artesanos Registrados' },
    { icon: Calendar, value: '200+', label: 'Eventos Anuales' },
    { icon: MapPin, value: '30+', label: 'Lugares Turísticos' },
    { icon: Star, value: '4.9', label: 'Calificación Promedio' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Sucre, Bolivia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                Descubre Sucre
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                La Capital Constitucional de Bolivia te espera con su rica historia, 
                cultura vibrante y artesanías únicas. Explora, descubre y vive la magia de Sucre.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/mapa"
                  className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Explorar Mapa</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/eventos"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
                >
                  Ver Eventos
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Sucre?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una plataforma completa para descubrir todo lo que Sucre tiene para ofrecer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-hover bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Galería de Sucre
            </h2>
            <p className="text-xl text-gray-600">
              Descubre la belleza arquitectónica y cultural de nuestra ciudad
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="col-span-2 row-span-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Casa de la Libertad" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Catedral de Sucre" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Parque Bolívar" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1578320872916-bb61b562205e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Artesanías de Sucre" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Centro Histórico" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para explorar Sucre?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de visitantes que han descubierto la magia de nuestra ciudad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/artesanias"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Palette className="w-5 h-5" />
              <span>Ver Artesanías</span>
            </Link>
            <Link
              to="/acerca"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
