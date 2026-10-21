# AeroLab Center · Plataforma interactiva de Python — V2.4

Versión web educativa desarrollada con React + Vite para que alumnos principiantes aprendan fundamentos de Python de forma progresiva, interactiva y sin registro.

## Qué incluye

- 3 niveles: Explorador, Creador y Developer.
- 60 misiones principales + 21 actividades especiales (81 actividades evaluables).
- Editor Python con CodeMirror 6.
- Ejecución real de Python en el navegador con Pyodide + Web Worker.
- Prueba inicial, ruta adaptativa, repaso inteligente y jefes de bloque.
- Explicación de líneas, ejecución paso a paso, pistas progresivas e historial de intentos.
- Laboratorio Python y proyectos guardados localmente.
- Progreso, XP, estrellas y logros sin login.
- Diseño adaptado a computadora y tablet con identidad de Aerolab Center.

## Cambios V2.4

### Validación flexible de ejercicios
La plataforma ya no exige copiar exactamente el ejemplo. Al comprobar una misión:

1. Ejecuta el código real del alumno.
2. Analiza su estructura con `ast` de Python.
3. Comprueba conceptos relevantes como `print`, variables, `if`, bucles, funciones, clases, etc.
4. Permite nombres de variables y organización diferentes.
5. Compara la salida de forma tolerante a formato, etiquetas y puntuación cuando corresponde.

En las primeras misiones, el alumno puede incluso personalizar el mensaje o dato mostrado mientras demuestre el concepto solicitado.

### Nueva pantalla de misión
- Mejor aprovechamiento de pantalla.
- Encabezado de misión más compacto.
- Personaje de Python en lugar del robot anterior.
- Panel de recompensa/progreso integrado.
- Tabs: Aprende / Teoría breve / Ejemplo.
- Aviso visible de que el ejemplo no es la única respuesta correcta.
- Editor más amplio.
- Consola y botón Ejecutar integrados.
- Validación, pistas e historial de intentos en la misma vista.
- Diseño responsive para 1366×768, pantallas grandes y tablet.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173/`.

## Crear build de producción

```bash
npm run build
```

El sitio compilado queda en `dist/`.

## GitHub Pages

El proyecto incluye `.github/workflows/deploy-pages.yml`.

1. Sube todos los archivos del proyecto a la rama `main`.
2. En GitHub abre `Settings > Pages`.
3. En `Source`, elige **GitHub Actions**.
4. Haz un nuevo push a `main` o ejecuta el workflow manualmente desde `Actions`.

`vite.config.js` usa `base: './'`, por lo que los recursos funcionan correctamente dentro de una ruta de GitHub Pages.

## Almacenamiento

No se requiere cuenta. El progreso se guarda en `localStorage` y los proyectos del laboratorio en `IndexedDB`.

## Nota sobre Pyodide

La primera carga del motor Python necesita conexión a Internet porque Pyodide se obtiene desde CDN. Después, el navegador puede reutilizar recursos en caché según su configuración.

## Novedades V2.5

La V2.5 incorpora una pantalla de carga con identidad Aerolab, arte anime integrado, iconografía SVG sin emojis, optimización de espacios para laptop/tablet y una capa de celebraciones. Al completar una misión aparece un mensaje de logro; al superar Jefes se muestran mensajes de bloque y al vencer el tercer Jefe de cada ruta se muestra una pantalla especial de nivel completado.
