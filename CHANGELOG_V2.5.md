# AeroLab Python V2.5

## Cambios principales

- Pantalla de carga de entrada con identidad Aerolab Center y arte anime.
- Precarga de Pyodide en segundo plano sin bloquear el acceso a la interfaz.
- Mensaje visual de misión superada al completar una actividad por primera vez.
- Mensajes especiales de bloque superado, nivel superado y proyecto terminado.
- Pantalla de celebración con recompensas de XP y estrellas y acceso directo a la siguiente actividad.
- Sustitución de emojis de interfaz por iconos SVG consistentes.
- Integración del personaje anime proporcionado por el proyecto como guía visual, avatar y recurso de celebraciones.
- Reducción del alto de barra superior y ancho lateral para aprovechar mejor pantallas 1366×768 y tablets.
- Pantalla de misión más compacta: hero, teoría, editor y consola aprovechan más el viewport.
- Ruta, niveles, laboratorio, diccionario, progreso, onboarding y prueba inicial actualizados para la nueva identidad visual.
- Se conserva la validación flexible: el alumno puede resolver los ejercicios con código diferente al ejemplo si cumple el comportamiento y los conceptos requeridos.

## Notas

La pantalla inicial de carga dura aproximadamente 1.5 segundos. Pyodide continúa precargando en segundo plano para no dejar al alumno esperando si la conexión al CDN tarda.
