
    function saveChanges() {
        // Recuperar os valores inseridos pelo usu�rio
        let firstName = document.getElementById('inputFirstName').value;
        let lastName = document.getElementById('inputLastName').value;
        let cpf = document.getElementById('inputOrgName').value;
        let birthday = document.getElementById('inputBirthday').value;
        let email = document.getElementById('inputEmailAddress').value;
        let phoneNumber = document.getElementById('inputPhone').value;
        let address = document.getElementById('inputLocation').value;
        let password = document.getElementById('inputPassword').value;
        let confirmPassword = document.getElementById('inputConfirmPassword').value;

        // Realizar as valida��es necess�rias, por exemplo, verificar se a senha e a confirma��o de senha coincidem

        // Enviar os dados para o servidor ou realizar outras a��es necess�rias
        // ...

        // Exibir uma mensagem de sucesso ou redirecionar para outra p�gina
        alert("Altera��es salvas com sucesso!");
    }

    function formatarCPF(event) {
        var cpf = event.target.value;
        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        event.target.value = cpf;
      }
      function formatardata(event) {
        var data = event.target.value;
        data =  data.replace(/\D/g, '');
        data =  data.replace(/(\d{2})(\d)/, "$1/$2");
        data =  data.replace(/(\d{2})(\d)/, "$1/$2");
       // data =  data.replace(/(\d{2})(\d{2})(\d{2})$/, );
        data =  data.replace(/(\d{4})(\d{3})(\d{3})(\d{3})$/);;
        
        event.target.value =  data;
      }