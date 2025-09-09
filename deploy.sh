#!/bin/bash

# Script de despliegue para Sucre Turismo
# Este script construye la aplicación y la prepara para producción

echo "🚀 Iniciando proceso de despliegue de Sucre Turismo..."

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js primero."
    exit 1
fi

# Verificar que npm esté instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado. Por favor instala npm primero."
    exit 1
fi

echo "✅ Node.js y npm están instalados"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"

# Construir la aplicación
echo "🔨 Construyendo aplicación para producción..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error al construir la aplicación"
    exit 1
fi

echo "✅ Aplicación construida correctamente"

# Verificar que la carpeta dist existe
if [ -d "dist" ]; then
    echo "✅ Carpeta de distribución creada"
    echo "📁 Archivos listos para despliegue en: ./dist/"
    echo ""
    echo "🌐 Para servir la aplicación localmente:"
    echo "   npm run preview"
    echo ""
    echo "📋 Archivos para subir al servidor:"
    ls -la dist/
else
    echo "❌ No se encontró la carpeta de distribución"
    exit 1
fi

echo ""
echo "🎉 ¡Despliegue completado exitosamente!"
echo ""
echo "📝 Próximos pasos:"
echo "   1. Subir los archivos de la carpeta 'dist/' a tu servidor web"
echo "   2. Configurar el servidor para servir archivos estáticos"
echo "   3. Configurar dominio y SSL si es necesario"
echo ""
echo "🔗 URLs de ejemplo para despliegue:"
echo "   - Netlify: https://netlify.com"
echo "   - Vercel: https://vercel.com"
echo "   - GitHub Pages: https://pages.github.com"
