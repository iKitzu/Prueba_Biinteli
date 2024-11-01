# 🌍 VIAJE POR COLOMBIA - Propuesta de Solución Frontend

## 📄 Descripción del Proyecto

Este proyecto implementa una API para **"Viaje por Colombia"** que permite a los usuarios encontrar rutas de viaje entre un origen y un destino especificados. Si se puede calcular la ruta, la API devuelve la información de la misma; en caso contrario, informa que no es posible realizarla.

### 🎯 Propósito de la Propuesta

La presente propuesta está orientada al desarrollo frontend de la solución, con el objetivo de ofrecer una interfaz amigable y funcional que permita al usuario ingresar el origen y destino de su viaje y visualizar la ruta sugerida. Esta interfaz está diseñada para integrarse con el backend construido por el equipo, ofreciendo una experiencia completa y visualmente atractiva para el usuario final.

### 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML, CSS y JavaScript, con Visual Studio Code para el desarrollo.
- **Backend**: Construido en Java con Spring Boot. Requiere de IntelliJ IDEA o un entorno similar para su ejecución.
- **Servidor Local**: Para ver la página, usa la extensión "Live Server" en Visual Studio Code.

### 📋 Requisitos

1. **Frontend**: Visual Studio Code con Live Server para ejecutar el frontend.
2. **Backend**: Un entorno de desarrollo como IntelliJ IDEA para ejecutar el proyecto de backend en local y asegurar la correcta comunicación con la API.

### 🧩 Estructura de la Solución

La arquitectura del proyecto sigue el modelo de capas, con una API REST para la consulta de rutas y datos de vuelo. La interfaz de usuario permite la entrada de parámetros y el consumo de las respuestas de la API.

### 🔗 Principales Endpoints de Backend

#### 1. ✈️ Obtener Todos los Vuelos

- **Ruta**: `GET /API/journeyFlights`
- **Descripción**: Devuelve una lista de todos los vuelos disponibles.

#### 2. 📋 Obtener Información de Vuelo por ID

- **Ruta**: `GET /API/journeyFlights/{id}`
- **Descripción**: Consulta un vuelo específico según el ID proporcionado.

#### 3. 🗺️ Obtener Ruta Completa con Detalles de Vuelo

- **Ruta**: `GET /API/journeyFlights/journeyWithFlights/{id}`
- **Descripción**: Devuelve la información detallada de la ruta junto con los vuelos asociados, si está disponible.

### 🚀 Ejecución

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/iKitzu/Prueba_Biinteli
   ```

2. **Iniciar el Backend**:
   - Abre el proyecto en IntelliJ IDEA o en tu entorno Java favorito.
   - Configura el puerto para que coincida con el localhost del frontend.
   - Inicia el servidor.

3. **Iniciar el Frontend**:
   - Abre la carpeta del frontend en Visual Studio Code.
   - Ejecuta el Live Server para cargar la página.