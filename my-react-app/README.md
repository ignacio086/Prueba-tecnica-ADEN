Hola!

Esta prueba técnica se realizó con Vite+React para la estructura principal, para manejar estados globales se usó @reduxjs-toolkit y react-redux, para manejar el consumo de la API se usó axios, para estilar botones e inputs se ocupó styled-components y para estilar el resto de componentes y partes se ocupó css en linea y .css.

En esta prueba se encuentran los 3 puntos que se pedían:
1. Maquetar la aplicación lo más similar al prototipo adjuntado en la sección de recursos
(link de figma).
2. Implementar la lógica necesaria con código limpio y ordenado, haciendo uso de la API
proporcionada, en la sección de recursos.
3. En el prototipo hay un historial de búsqueda, al recargar la página debe permanecer
dicho historial.


Punto 1:

Realizado con React, hooks de react (useState,useNavigate) y estilos.

Punto 2:

Realizado con React, hooks de react(useEffect,useState), para las peticiones GET a la API se ocupó axios , para los estados globales(creacion de reducers y store, uso de hooks como useDispatch y useSelector) se usó tanto redux toolkit como react-redux.

Punto 3:

Para el historial de búsqueda se usó redux toolkit y react-redux, ocupando hooks de esas librerias se puede preservar el historial de busqueda entre páginas.

Para terminar este readme, agradecer la oportunidad de esta entrevista, agradecer cualquier consejo o mejora con respecto al codigo realizado. Espero que les guste.

Ignacio Gomez.
