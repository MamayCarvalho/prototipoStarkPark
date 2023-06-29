let ctx = document.getElementById('chart').getContext('2d');

let data = {
    labels: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    datasets: [
        {
            label: 'Quantidade de Carros',
            data: [80, 41, 52, 39, 48, 73, 80],
            backgroundColor: 'rgb(196, 160, 0, 0.5)',
            borderColor: 'rgb(255, 195, 0)',
            borderWidth: 1,
            color: 'rgba(255, 255, 255, 1)'
        },
        {
            label: 'Quantidade de Motos',
            data: [20, 15, 8, 9, 13, 18, 20],
            backgroundColor: 'rgb(195, 195, 195, 0.5)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1,
            color: 'rgba(255, 255, 255, 1)'
        }
    ]
};

let options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            stepSize: 10,
            grid: {
                color: 'rgba(255, 255, 255, 0.5)' // Cor das linhas do grid (branco com transparência)
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