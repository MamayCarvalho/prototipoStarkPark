let vagasStatus = {};
let tipoVeiculo = null;
let tipoVeiculoValor = null;

function selectCar() {
  resetTipoVeiculo()
  tipoVeiculo = 'carro';
  tipoVeiculoValor = 2;
}

function selectMoto() {
  resetTipoVeiculo()
  tipoVeiculo = 'moto';
  tipoVeiculoValor = 1;
}

function reserveVaga(numero) {
  let vagaStatus = vagasStatus[numero];
  if (vagaStatus) {
    if (tipoVeiculo === 'moto' && vagaStatus.tipoVeiculo === 'moto') {
      if (vagaStatus.segundaSelecao) {
        let confirmacao = confirm("Deseja reservar a vaga? Já há uma moto nesta vaga!");
        confirmacao ? (vagaStatus.valorVeiculo = 2) : null;
      } else {
        vagaStatus.segundaSelecao = true;
      }
    } else {
      alert("Essa vaga já está ocupada!");
    }
  } else {
    let confirmacao = confirm("Deseja reservar a vaga?");
    confirmacao
      ? (vagasStatus[numero] = { tipoVeiculo: tipoVeiculo, valorVeiculo: tipoVeiculoValor })
      : null;
  }
  atualizarVagas();
}

function atualizarVagas() {
  let vagas = document.getElementsByClassName("vaga");
  for (let i = 0; i < vagas.length; i++) {
    let vaga = vagas[i];
    let numeroVaga = i + 1;
    let vagaStatus = vagasStatus[numeroVaga];

    if (vagaStatus) {
      if (vagaStatus.tipoVeiculo === 'moto') {
        vaga.style.backgroundColor = vagaStatus.valorVeiculo === 1 ? 'orange' : 'red';
      } else if (vagaStatus.tipoVeiculo === 'carro') {
        vaga.style.backgroundColor = 'red';
      }
    } else {
      vaga.style.backgroundColor = 'green';
    }
  }

  let vagasOcupadas = Object.keys(vagasStatus).length;
  let vagasLivres = Object.keys(vagasStatus).length - vagasOcupadas;

  document.getElementById("vagasOcupadas").textContent = `Vagas Ocupadas: ${vagasOcupadas}`;
  document.getElementById("vagasLivres").textContent = `Vagas Livres: ${vagasLivres = 100 - vagasOcupadas}`;
}

atualizarVagas();

function resetTipoVeiculo() {
  tipoVeiculo = null;
  tipoVeiculoValor = null;
}

