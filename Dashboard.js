// Grafico de Barra
let painel = [];
let dados1 = [];
let dados2 = [];

function criarGrafico(painel, dados1, dados2) {
  let ctx = document.getElementById("Canvas").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: painel,
      datasets: [
        {
          label: "carro",
          data: dados1,
          backgroundColor: 'rgb(196, 160, 0, 0.5)',
          borderColor: 'rgb(255, 195, 0)',
          color: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        },
        {
          label: "motos",
          data: dados2,
          backgroundColor: 'rgb(195, 195, 195, 0.5)',
          borderColor: 'rgb(255, 255, 255)',
          color: 'rgba(255, 255, 255, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


function atualizarGrafico(painel, dados1, dados2) {
  let chart = Chart.getChart("Canvas");

  chart.data.labels = painel;
  chart.data.datasets[0].data = dados1;
  chart.data.datasets[1].data = dados2;

  chart.update();
}

document.getElementById("botao1").addEventListener("click", function () {
  let novosDados1 = [19, 40, 30, 50];
  let novosDados2 = [11, 14, 15];
  painel = ["Manhã", "Tarde", "Noite"];

  atualizarGrafico(painel, novosDados1, novosDados2);
});

document.getElementById("botao2").addEventListener("click", function () {
  let novosDados1 = [52, 68, 74, 64, 100];
  let novosDados2 = [33, 36, 48, 32];
  painel = ["primeira-Semana", "segunda-Semana", "terceira-Semana", "Quarta-Semana"];

  atualizarGrafico(painel, novosDados1, novosDados2);
});

document.getElementById("botao3").addEventListener("click", function () {
  let novosDados1 = [265, 377, 482, 500];
  let novosDados2 = [144, 158, 212];
  painel = ["Janeiro", "Fevereiro", "Março"];

  atualizarGrafico(painel, novosDados1, novosDados2);
});

criarGrafico(painel, dados1, dados2);


// Grafico Pizza
let labels = ["vagas livres", "vagas ocupadas"];
let data1 = [60, 40];
let data2 = [70, 30];
let data3 = [70, 30];
let data4 = [70, 30];
let data5 = [70, 30];
let data6 = [70, 30];
let data7 = [70, 30];
let data8 = [70, 30];
let data9 = [70, 30];
let data10 = [70, 30];

function criarGraficoPizza(containerId, canvasId, labels, data) {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: ["rgb(196, 160, 0, 0.5)", "rgb(195, 195, 195, 0.5)"]
      }]
    }
  });
}

criarGraficoPizza("container", "chart1", labels, data1);
criarGraficoPizza("container", "chart2", labels, data2);
criarGraficoPizza("container", "chart3", labels, data3);
criarGraficoPizza("container", "chart4", labels, data4);
criarGraficoPizza("container", "chart5", labels, data5);
criarGraficoPizza("container", "chart6", labels, data6);
criarGraficoPizza("container", "chart7", labels, data7);
criarGraficoPizza("container", "chart8", labels, data8);
criarGraficoPizza("container", "chart9", labels, data9);
criarGraficoPizza("container", "chart10", labels, data10);