function initCharts() {
    // Gráfico de ventas
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Ventas ($)',
                    data: [12500, 15300, 18000, 21500, 25000, 28500, 32000, 31000, 34500, 36000, 38000, 41000],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#6366f1',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        titleFont: { size: window.innerWidth < 480 ? 12 : 14 },
                        bodyFont: { size: window.innerWidth < 480 ? 11 : 13 },
                        padding: 10,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'k';
                            },
                            font: {
                                size: window.innerWidth < 480 ? 10 : 12
                            }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            font: {
                                size: window.innerWidth < 480 ? 10 : 12
                            }
                        }
                    }
                }
            }
        });
    }

    // Gráfico de tráfico
    const trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        new Chart(trafficCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Usuarios',
                    data: [650, 720, 890, 1050, 1200, 850, 600],
                    backgroundColor: 'rgba(14, 165, 233, 0.7)',
                    borderColor: '#0ea5e9',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        titleFont: { size: window.innerWidth < 480 ? 12 : 14 },
                        bodyFont: { size: window.innerWidth < 480 ? 11 : 13 },
                        padding: 10
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: {
                            font: {
                                size: window.innerWidth < 480 ? 10 : 12
                            }
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: {
                            font: {
                                size: window.innerWidth < 480 ? 10 : 12
                            }
                        }
                    }
                }
            }
        });
    }
}

// Llamar a initCharts cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initCharts);

// Actualizar gráficos cuando cambie el tamaño de la ventana
window.addEventListener('resize', function() {
    // Los gráficos de Chart.js son responsive por defecto
    // No necesitan ser reinicializados
});