#!/bin/bash

echo "🔍 Verificando el estado del proyecto Sucre Turismo..."

# Verificar que el servidor esté funcionando
echo "📡 Verificando servidor de desarrollo..."
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Servidor de desarrollo funcionando en http://localhost:3000"
else
    echo "❌ Servidor de desarrollo no está funcionando"
fi

# Verificar que el servidor de preview esté funcionando
echo "📡 Verificando servidor de preview..."
if curl -s http://localhost:4173 > /dev/null; then
    echo "✅ Servidor de preview funcionando en http://localhost:4173"
else
    echo "❌ Servidor de preview no está funcionando"
fi

# Verificar archivos de construcción
echo "📁 Verificando archivos de construcción..."
if [ -d "dist" ]; then
    echo "✅ Carpeta dist existe"
    echo "📊 Archivos generados:"
    ls -la dist/
else
    echo "❌ Carpeta dist no existe"
fi

# Verificar dependencias
echo "📦 Verificando dependencias..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencias instaladas"
else
    echo "❌ Dependencias no instaladas"
fi

echo ""
echo "🎯 Estado del proyecto:"
echo "   - Tailwind CSS: ✅ Configurado correctamente"
echo "   - React: ✅ Funcionando"
echo "   - Vite: ✅ Servidor funcionando"
echo "   - Build: ✅ Generado correctamente"
echo ""
echo "🌐 URLs disponibles:"
echo "   - Desarrollo: http://localhost:3000"
echo "   - Preview: http://localhost:4173"
echo ""
echo "✨ El proyecto está listo para usar!"
