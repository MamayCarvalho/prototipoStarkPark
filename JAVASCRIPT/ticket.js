function gerarTicket(vaga) {
    let codigo = Math.floor(Math.random() * 9000) + 1000;
    let dataHora = obterDataHoraAtual();

    let ticket = "--------- TICKET DE ESTACIONAMENTO ---------\n";
    ticket += "Data/Hora: " + dataHora + "\n";
    ticket += "Vaga: " + vaga + "\n";
    ticket += "Código: " + codigo + "\n";
    ticket += "--------------------------------------------";

    return ticket;
  }

  function obterDataHoraAtual() {
    let dataHoraAtual = new Date();
    let dia = ("0" + dataHoraAtual.getDate()).slice(-2);
    let mes = ("0" + (dataHoraAtual.getMonth() + 1)).slice(-2);
    let ano = dataHoraAtual.getFullYear();
    let horas = ("0" + dataHoraAtual.getHours()).slice(-2);
    let minutos = ("0" + dataHoraAtual.getMinutes()).slice(-2);
    let segundos = ("0" + dataHoraAtual.getSeconds()).slice(-2);
    let dataHoraFormatada = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundos;

    return dataHoraFormatada;
  }

  let vaga = "A23";
  let ticket = gerarTicket(vaga);
  console.log(ticket);