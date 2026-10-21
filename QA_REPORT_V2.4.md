# QA — AeroLab Python V2.4

## Revisiones realizadas

- Archivos JavaScript de servicios, worker, datos y utilidades validados con `node --check`.
- Todos los archivos JSX del proyecto fueron analizados sintácticamente con TypeScript (`tsc`, JSX habilitado, sin resolución de dependencias) sin errores de sintaxis.
- Se verificó la existencia de 60 misiones principales y 21 actividades especiales.
- Se añadió análisis estructural de Python mediante `ast` dentro del Web Worker.
- Se reemplazó la validación literal de nombres de variables por validación conceptual.
- Las primeras cinco misiones de Explorador permiten salida personalizada cuando el objetivo es practicar la mecánica inicial.
- Se añadió workflow para despliegue en GitHub Pages mediante GitHub Actions.

## Pendiente en equipo local

La instalación de paquetes (`npm install`) no terminó dentro del entorno de generación por tiempo de red. Antes de publicar, ejecutar localmente:

```bash
npm install
npm run build
```

Si el build concluye correctamente, subir a GitHub y habilitar Pages con GitHub Actions.
