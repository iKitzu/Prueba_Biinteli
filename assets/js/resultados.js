// Objeto con las abreviaturas y nombres completos de las ciudades
const ciudades = {
    "BGA": "Bucaramanga",
    "BTA": "Bogotá",
    "MED": "Medellín",
    "CTG": "Cartagena",
    "CAL": "Cali",
    "CUC": "Cúcuta",
    "STA": "Santa Marta"
};

function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(price);
}

window.onload = function() {
    try {
        const vuelosStr = localStorage.getItem('vuelosEncontrados');
        if (!vuelosStr) {
            throw new Error('No se encontraron datos de vuelos');
        }

        const vuelos = JSON.parse(vuelosStr);
        if (vuelos.length === 0) {
            throw new Error('No hay vuelos disponibles');
        }

        // Mostrar información de la ruta
        const routeInfo = document.getElementById('routeInfo');
        routeInfo.innerHTML = `
            <h2>${ciudades[vuelos[0].journey_id.origin] || vuelos[0].journey_id.origin} → ${ciudades[vuelos[0].journey_id.destination] || vuelos[0].journey_id.destination}</h2>
            <p>${vuelos.length} vuelo(s) encontrado(s)</p>
        `;

        // Mostrar todos los vuelos
        const container = document.getElementById('flightsContainer');
        vuelos.forEach(vuelo => {
            const card = document.createElement('div');
            card.className = 'flight-card';
            card.innerHTML = `
                <div class="flight-info">
                    <div class="info-item">
                        <h3>Aerolínea</h3>
                        <p>${vuelo.flight_id.transport_id.flight_carrier}</p>
                    </div>
                    <div class="info-item">
                        <h3>Número de Vuelo</h3>
                        <p>${vuelo.flight_id.transport_id.flight_number}</p>
                    </div>
                    <div class="info-item">
                        <h3>Origen</h3>
                        <p>${ciudades[vuelo.journey_id.origin] || vuelo.journey_id.origin}</p>
                    </div>
                    <div class="info-item">
                        <h3>Destino</h3>
                        <p>${ciudades[vuelo.journey_id.destination] || vuelo.journey_id.destination}</p>
                    </div>
                </div>
                <div class="price-tag">
                    ${formatPrice(vuelo.journey_id.price)}
                </div>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error al cargar los vuelos:', error);
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.style.display = 'block';
        errorDiv.textContent = error.message;
        
        // Mostrar contenedor de "sin resultados"
        const container = document.getElementById('flightsContainer');
        container.innerHTML = `
            <div class="no-results">
                <h2>No se encontraron vuelos</h2>
                <p>Por favor, intenta con una nueva búsqueda</p>
            </div>
        `;
    }
}
