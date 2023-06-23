(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Validação de formulário Bootstrap
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

const serial = "S51DF-FI4D8-FDFS5-HUYG1-S45DF"