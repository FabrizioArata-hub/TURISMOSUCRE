import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { motion } from 'framer-motion'
import { MapPin, Clock, Star, Phone, Globe } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in react-leaflet
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Map = () => {
  const touristPlaces = [
    {
      id: 1,
      name: 'Casa de la Libertad',
      position: [-19.0476, -65.2591],
      description: 'Museo histórico donde se firmó la Declaración de Independencia de Bolivia.',
      hours: 'Lunes a Viernes: 9:00 - 12:00, 14:30 - 18:30',
      rating: 4.8,
      phone: '+591 4 6454200',
      website: 'www.casadelalibertad.org.bo',
      category: 'Histórico'
    },
    {
      id: 2,
      name: 'Catedral Metropolitana',
      position: [-19.0478, -65.2593],
      description: 'Impresionante catedral colonial con arquitectura barroca y arte religioso.',
      hours: 'Diario: 8:00 - 18:00',
      rating: 4.6,
      phone: '+591 4 6454200',
      website: 'www.catedralsucre.org',
      category: 'Religioso'
    },
    {
      id: 3,
      name: 'Mercado Central',
      position: [-19.0485, -65.2600],
      description: 'Mercado tradicional donde encontrarás productos locales y artesanías.',
      hours: 'Diario: 6:00 - 20:00',
      rating: 4.4,
      phone: '+591 4 6454200',
      website: 'www.mercadocentralsucre.com',
      category: 'Comercial'
    },
    {
      id: 4,
      name: 'Parque Bolívar',
      position: [-19.0480, -65.2585],
      description: 'Hermoso parque central con jardines y monumentos históricos.',
      hours: 'Diario: 6:00 - 22:00',
      rating: 4.5,
      phone: '+591 4 6454200',
      website: 'www.parquebolivar.org',
      category: 'Recreativo'
    },
    {
      id: 5,
      name: 'Museo de Arte Indígena',
      position: [-19.0490, -65.2605],
      description: 'Museo dedicado al arte indígena y las tradiciones culturales.',
      hours: 'Martes a Domingo: 9:00 - 17:00',
      rating: 4.7,
      phone: '+591 4 6454200',
      website: 'www.museoindigena.org',
      category: 'Cultural'
    },
    {
      id: 6,
      name: 'Mirador de la Recoleta',
      position: [-19.0440, -65.2550],
      description: 'Vista panorámica espectacular de toda la ciudad de Sucre.',
      hours: 'Diario: 8:00 - 18:00',
      rating: 4.9,
      phone: '+591 4 6454200',
      website: 'www.miradorrecoleta.org',
      category: 'Panorámico'
    }
  ]

  const categories = ['Todos', 'Histórico', 'Religioso', 'Comercial', 'Recreativo', 'Cultural', 'Panorámico']

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
              Mapa Interactivo de Sucre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora los lugares más emblemáticos de la ciudad. Haz clic en los marcadores 
              para obtener información detallada sobre cada ubicación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Container */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 md:h-[600px] w-full">
              <MapContainer
                center={[-19.0476, -65.2591]}
                zoom={15}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {touristPlaces.map((place) => (
                  <Marker key={place.id} position={place.position}>
                    <Popup className="custom-popup">
                      <div className="p-4 min-w-[300px]">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {place.name}
                          </h3>
                          <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                            {place.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">
                          {place.description}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700">{place.hours}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-700">{place.rating}/5.0</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700">{place.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-700">{place.website}</span>
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Places List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lugares de Interés
            </h2>
            <p className="text-gray-600">
              Descubre los sitios más importantes de Sucre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touristPlaces.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {place.name}
                    </h3>
                  </div>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                    {place.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {place.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{place.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-700">{place.rating}/5.0</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Map
