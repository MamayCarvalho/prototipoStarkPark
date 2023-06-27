import { vagasStatus } from './totem.js ';

function criarTabela() {
    let tabela = document.createElement('table');
  
    // Cabeçalho da tabela
    let cabecalho = tabela.createTHead();
    let cabecalhoRow = cabecalho.insertRow();
    let cabecalhoVaga = cabecalhoRow.insertCell();
    cabecalhoVaga.textContent = 'Vaga';
    let cabecalhoTipo = cabecalhoRow.insertCell();
    cabecalhoTipo.textContent = 'Tipo';
    let cabecalhoOcupacao = cabecalhoRow.insertCell();
    cabecalhoOcupacao.textContent = 'Ocupação';
    let cabecalhoCodigo = cabecalhoRow.insertCell();
    cabecalhoCodigo.textContent = 'Código';
    let cabecalhoDataHora = cabecalhoRow.insertCell();
    cabecalhoDataHora.textContent = 'Data/Hora';
  
    // Linhas da tabela
    let corpo = tabela.createTBody();
    for (let numero in vagasStatus) {
      let vagaStatus = vagasStatus[numero];
  
      let linha = corpo.insertRow();
      let cellVaga = linha.insertCell();
      cellVaga.textContent = vagaStatus.vaga;
      let cellTipo = linha.insertCell();
      cellTipo.textContent = vagaStatus.tipoVeiculo;
      let cellOcupacao = linha.insertCell();
      cellOcupacao.textContent = vagaStatus.ocupacaoVaga;
      let cellCodigo = linha.insertCell();
      cellCodigo.textContent = vagaStatus.codigo;
      let cellDataHora = linha.insertCell();
      cellDataHora.textContent = vagaStatus.dataHora;
    }
  
    // Adicionar a tabela ao elemento desejado no DOM
    let tabelaContainer = document.getElementById('tabela-container');
    tabelaContainer.appendChild(tabela);
  }
  
  criarTabela();