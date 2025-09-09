# Sucre Turismo - Sitio Web Turístico

## Descripción del Proyecto

Sucre Turismo es una plataforma web moderna y funcional diseñada para impulsar la propuesta cultural y turística de la ciudad de Sucre, Bolivia. El sitio web ofrece una experiencia completa para visitantes, incluyendo mapas interactivos, calendario de eventos y catálogo de artesanías.

## Características Principales

### 🗺️ **Mapas Interactivos**
- Mapa interactivo con ubicaciones turísticas importantes
- Información detallada de cada lugar de interés
- Marcadores con popups informativos
- Integración con Leaflet para una experiencia fluida

### 📅 **Calendario de Eventos**
- Lista completa de eventos culturales y festivales
- Filtros por categoría y fecha
- Información detallada de cada evento
- Sistema de calificaciones y reseñas

### 🎨 **Catálogo de Artesanías**
- Directorio completo de artesanos locales
- Filtros por categoría y especialidad
- Perfiles detallados de cada artesano
- Sistema de búsqueda avanzada

### 📱 **Diseño Responsivo**
- Adaptable a dispositivos móviles y tablets
- Interfaz moderna y accesible
- Optimizado para diferentes tamaños de pantalla
- Navegación intuitiva

## Tecnologías Utilizadas

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Mapas**: Leaflet + React-Leaflet
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fechas**: date-fns
- **Enrutamiento**: React Router DOM

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd sucre-turismo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción

## Estructura del Proyecto

```
sucre-turismo/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   ├── Artisans.jsx
│   │   ├── Map.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Funcionalidades Implementadas

### Página Principal (Home)
- Hero section con llamada a la acción
- Sección de características principales
- Estadísticas del turismo en Sucre
- Diseño moderno con animaciones

### Mapa Interactivo
- 6 ubicaciones turísticas principales
- Información detallada de cada lugar
- Horarios, calificaciones y contacto
- Categorización por tipo de lugar

### Calendario de Eventos
- 6 eventos de ejemplo con información completa
- Filtros por categoría
- Sistema de fechas con estados (Hoy, Mañana, Esta semana)
- Información de precios y capacidad

### Catálogo de Artesanías
- 6 artesanos con perfiles detallados
- Especialidades y años de experiencia
- Sistema de búsqueda y filtros
- Artesanos destacados

### Página Acerca de
- Información sobre la misión del proyecto
- Estadísticas de impacto
- Información del equipo
- Datos de contacto

## Características Técnicas

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados para diferentes dispositivos
- Navegación adaptativa

### Performance
- Carga rápida con Vite
- Optimización de imágenes
- Lazy loading de componentes

### Accesibilidad
- Navegación por teclado
- Contraste de colores optimizado
- Etiquetas semánticas HTML

## Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
- Primary: Azul (#667eea)
- Secondary: Púrpura (#764ba2)

### Contenido
- Eventos: Modificar el array `events` en `src/pages/Events.jsx`
- Artesanos: Modificar el array `artisans` en `src/pages/Artisans.jsx`
- Lugares turísticos: Modificar el array `touristPlaces` en `src/pages/Map.jsx`

## Despliegue

### Build para Producción
```bash
npm run build
```

### Servir la Aplicación
```bash
npm run preview
```

### Despliegue en Servidores
Los archivos generados en la carpeta `dist/` pueden ser desplegados en cualquier servidor web estático como:
- Netlify
- Vercel
- GitHub Pages
- Servidor Apache/Nginx

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

- **Desarrollador**: Fabrizio Arata
- **Email**: info@sucreturismo.bo
- **Teléfono**: +591 4 6454200
- **Dirección**: Calle Bolívar #123, Centro Histórico, Sucre, Bolivia

## Agradecimientos

- A la comunidad de artesanos de Sucre
- A los organizadores de eventos culturales
- A la ciudad de Sucre por su rica herencia cultural
- A la comunidad de desarrolladores de React y las librerías utilizadas

---

**Sucre Turismo** - Impulsando el turismo cultural de Bolivia 🇧🇴
