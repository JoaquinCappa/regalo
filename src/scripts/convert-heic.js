const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images'); // Mismo directorio o podés cambiarlo

// Script básico que usa ImageMagick si está instalado, o te da las instrucciones.
console.log("=== SCRIPT PARA CONVERTIR HEIC ===");
console.log("Nota: Convertir HEIC en Node.js en Windows suele ser complejo por dependencias nativas (libvips).");
console.log("La forma más confiable y rápida es usar una de estas opciones:");
console.log("1. Usar ImageMagick (si lo tenés instalado): 'magick mogrify -format webp *.heic'");
console.log("2. Usar un servicio gratuito como iloveimg.com para convertir el lote entero a JPG o WebP.");
console.log("3. Si estás en Mac, podés usar 'sips -s format jpeg foto.heic --out foto.jpg'");
console.log("");
console.log("Si querés usar Node.js, podés instalar 'heic-convert' y 'promisify' pero requiere dependencias de sistema.");
console.log("Te sugiero convertir tus HEIC usando alguna herramienta web y reemplazar las rutas en src/data/story.ts");
