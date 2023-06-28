let ctx = document.getElementById('chart').getContext('2d');

let data = {
    labels: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    datasets: [{
        label: 'Quantidade de Veículos',
        data: [20, 35, 42, 30, 55, 38, 25],
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Cor das barras (branco com transparência)
        borderColor: 'rgba(255, 255, 255, 1)', // Cor das bordas das barras (branco)
        borderWidth: 1, // Espessura das bordas das barras
        color: 'rgba(255, 255, 255, 1)' // Cor do texto (branco)
    }]
};

let options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            stepSize: 10,
            grid: {
                color: 'rgba(255, 255, 255, 0.2)' // Cor das linhas do grid (branco com transparência)
            },
            ticks: {
                color: 'rgba(255, 255, 255, 1)' // Cor dos valores do eixo y (branco)
            }
        },
        x: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)' // Cor dos valores do eixo x (branco)
            }
        }
    },
    plugins: {
        legend: {
            labels: {
                color: 'rgba(255, 255, 255, 1)' // Cor das legendas (branco)
            }
        }
    }
};

let chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});