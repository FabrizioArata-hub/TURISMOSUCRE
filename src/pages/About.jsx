import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, Award, Heart, Globe, Phone, Mail } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Turismo Sostenible',
      description: 'Promovemos el turismo responsable que respeta la cultura local y el medio ambiente.'
    },
    {
      icon: Users,
      title: 'Comunidad Local',
      description: 'Trabajamos directamente con artesanos y organizadores locales para apoyar la economía regional.'
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros servicios y productos están verificados para garantizar la mejor experiencia.'
    },
    {
      icon: Heart,
      title: 'Pasión por Sucre',
      description: 'Nuestro equipo está compuesto por locales apasionados por mostrar lo mejor de nuestra ciudad.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Visitantes Mensuales' },
    { number: '50+', label: 'Artesanos Registrados' },
    { number: '200+', label: 'Eventos Anuales' },
    { number: '30+', label: 'Lugares Turísticos' }
  ]

  const team = [
    {
      name: 'Fabrizio Arata',
      role: 'Desarrollador Web & Diseñador',
      description: 'Creador de la plataforma Sucre Turismo. Especialista en desarrollo web moderno y diseño de interfaces.',
      image: '/images/fabrizio-arata.jpg',
      featured: true
    },
    {
      name: 'Ana María Vargas',
      role: 'Directora de Turismo',
      description: 'Especialista en desarrollo turístico con más de 10 años de experiencia.',
      image: '/images/ana-vargas.jpg'
    },
    {
      name: 'Carlos Mamani',
      role: 'Coordinador de Eventos',
      description: 'Experto en organización de eventos culturales y festivales tradicionales.',
      image: '/images/carlos-mamani.jpg'
    },
    {
      name: 'Elena Quispe',
      role: 'Especialista en Artesanías',
      description: 'Conecta a los artesanos locales con el mercado turístico internacional.',
      image: '/images/elena-quispe.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acerca de Sucre Turismo
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Somos la plataforma oficial de turismo de Sucre, dedicados a promover 
              la riqueza cultural, histórica y artística de nuestra hermosa ciudad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sucre Turismo nació con la visión de crear una plataforma tecnológica 
                unificada que impulse la propuesta cultural y turística de la ciudad de Sucre. 
                Creemos que cada visitante merece descubrir la auténtica belleza de nuestra ciudad.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabajamos incansablemente para conectar a los visitantes con la rica 
                tradición artesanal, los eventos culturales únicos y los lugares históricos 
                que hacen de Sucre un destino inolvidable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">¿Por qué Sucre?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Capital Constitucional de Bolivia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Patrimonio Cultural de la Humanidad UNESCO</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Centro histórico colonial bien preservado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Tradición artesanal centenaria</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Clima templado durante todo el año</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y compromiso con Sucre
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-gray-600">
              Cifras que demuestran nuestro compromiso con el turismo en Sucre
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Conoce a las personas que hacen posible Sucre Turismo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-hover bg-white rounded-xl p-6 shadow-lg text-center ${
                  member.featured ? 'border-2 border-primary-200' : ''
                }`}
              >
                {member.featured && (
                  <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Creador
                  </div>
                )}
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              ¿Tienes preguntas o sugerencias? Estamos aquí para ayudarte
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Oficina Principal</h3>
              <p className="text-gray-600">
                Calle Bolívar #123<br />
                Centro Histórico<br />
                Sucre, Bolivia
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">
                +591 4 6454200<br />
                +591 4 6454201<br />
                Lun - Vie: 8:00 - 18:00
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                info@sucreturismo.bo<br />
                eventos@sucreturismo.bo<br />
                artesanos@sucreturismo.bo
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
