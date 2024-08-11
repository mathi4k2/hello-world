function emailValidation() {
    const email = document.getElementById('email');
    const emailConfirm = document.getElementById('email_confirm');
    const form = document.getElementById('form');
  
    emailConfirm.addEventListener('input', () => {
      // Eliminar cualquier mensaje de error previo
      const existingAlert = form.querySelector('.alert');
      if (existingAlert) {
        existingAlert.remove();
      }
  
      // Verificar si las direcciones de correo electrónico coinciden
      if (email.value !== emailConfirm.value) {
        emailConfirm.parentElement.classList.add('error');
        const element = document.createElement('p');
        const message = document.createTextNode("Los correos electrónicos no coinciden");
        element.appendChild(message);
        element.classList.add("alert");
        emailConfirm.parentElement.appendChild(element);
      } else {
        emailConfirm.parentElement.classList.remove('error');
      }
    });
  }
  
  window.onload = emailValidation;
  