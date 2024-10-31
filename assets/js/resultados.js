document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const origen = params.get('origen') || 'N/A';
    const destino = params.get('destino') || 'N/A';

    // Actualizar las ciudades en el resumen
    document.getElementById('origin-city').textContent = origen;
    document.getElementById('destination-city').textContent = destino;

    const vuelos = [
        {
            tipoVuelo: "ida",
            horaSalida: "06:05",
            ciudadSalida: origen,
            duracion: "59m",
            horaLlegada: "07:04",
            ciudadLlegada: destino,
            precio: "235,925",
            tarifas: [
                {
                    tipo: "basic",
                    descripcion: "Vuela ligero",
                    precio: "235,925",
                    detalles: ["1 artículo personal (bolso)", "No incluye equipaje de mano o bodega", "No incluye selección de asiento"]
                },
                {
                    tipo: "classic",
                    descripcion: "Más completo",
                    precio: "339,950",
                    detalles: ["1 artículo personal (bolso)", "1 equipaje de mano (10 kg)", "1 equipaje de bodega (23 kg)", "Check-in en aeropuerto", "Asiento Economy incluido", "Acumula 5 lifemiles por cada USD"]
                },
                {
                    tipo: "flex",
                    descripcion: "Más posibilidades",
                    precio: "378,275",
                    detalles: ["1 artículo personal (bolso)", "1 equipaje de mano (10 kg)", "1 equipaje de bodega (23 kg)", "Check-in en aeropuerto", "Asiento Plus (sujeto a disponibilidad)", "Acumula 7 lifemiles por cada USD", "Cambios antes del vuelo", "Reembolso antes del vuelo"]
                }
            ]
        },
        {
            tipoVuelo: "vuelta",
            horaSalida: "18:00",
            ciudadSalida: destino,
            duracion: "59m",
            horaLlegada: "18:59",
            ciudadLlegada: origen,
            precio: "235,925",
            tarifas: [
                {
                    tipo: "basic",
                    descripcion: "Vuela ligero",
                    precio: "235,925",
                    detalles: ["1 artículo personal (bolso)", "No incluye equipaje de mano o bodega", "No incluye selección de asiento"]
                },
                {
                    tipo: "classic",
                    descripcion: "Más completo",
                    precio: "339,950",
                    detalles: ["1 artículo personal (bolso)", "1 equipaje de mano (10 kg)", "1 equipaje de bodega (23 kg)", "Check-in en aeropuerto", "Asiento Economy incluido", "Acumula 5 lifemiles por cada USD"]
                },
                {
                    tipo: "flex",
                    descripcion: "Más posibilidades",
                    precio: "378,275",
                    detalles: ["1 artículo personal (bolso)", "1 equipaje de mano (10 kg)", "1 equipaje de bodega (23 kg)", "Check-in en aeropuerto", "Asiento Plus (sujeto a disponibilidad)", "Acumula 7 lifemiles por cada USD", "Cambios antes del vuelo", "Reembolso antes del vuelo"]
                }
            ]
        }
    ];

    renderVuelos(vuelos);

    // Manejadores de eventos para los filtros
    document.querySelectorAll('.filter-chip').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

function renderVuelos(vuelos) {
    const container = document.getElementById("flight-results");
    container.innerHTML = "";

    vuelos.forEach((vuelo) => {
        const flightCard = document.createElement("div");
        flightCard.className = "flight-card";

        const tipoViaje = vuelo.tipoVuelo === "ida" ? "Vuelo de Ida" : "Vuelo de Vuelta";

        flightCard.innerHTML = `
            <div class="flight-summary" onclick="toggleDetails(this.parentElement)">
                <div class="flight-time departure">
                    <div class="time">${vuelo.horaSalida}</div>
                    <div class="city">${vuelo.ciudadSalida}</div>
                </div>
                <div class="flight-duration">
                    <span class="duration-badge">
                        <i class="fas fa-plane"></i>
                        ${vuelo.duracion}
                    </span>
                    <span class="duration-type">Directo</span>
                </div>
                <div class="flight-time arrival">
                    <div class="time">${vuelo.horaLlegada}</div>
                    <div class="city">${vuelo.ciudadLlegada}</div>
                </div>
                <div class="flight-price">
                    <div class="price-amount">COP ${vuelo.precio}</div>
                    <div class="price-label">por persona</div>
                </div>
            </div>
            <div class="flight-details">
                <div class="fare-options">
                    ${vuelo.tarifas.map((tarifa) => `
                        <div class="fare-card ${tarifa.tipo}">
                            <div class="fare-header">
                                <div>
                                    <div class="fare-type">${tarifa.tipo}</div>
                                    <div class="fare-desc">${tarifa.descripcion}</div>
                                </div>
                                <div class="fare-price">
                                    <div class="fare-amount">COP ${tarifa.precio}</div>
                                </div>
                            </div>
                            <ul class="fare-features">
                                ${tarifa.detalles.map((detalle) => `
                                    <li class="fare-feature">
                                        <i class="fas fa-check-circle"></i>
                                        ${detalle}
                                    </li>
                                `).join('')}
                            </ul>
                            <div class="fare-footer">
                                <button class="select-fare">Seleccionar tarifa</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.appendChild(flightCard);
    });
}

function toggleDetails(element) {
    const details = element.querySelector('.flight-details');
    details.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});
