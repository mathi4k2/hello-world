function emailValidation() {
  const email = document.getElementById('email');
  const emailConfirm = document.getElementById('email_confirm');
  const form = document.getElementById('form');

  // Añadir evento para la validación en tiempo real
  emailConfirm.addEventListener('input', validateEmails);

  // Validar antes de enviar el formulario
  form.addEventListener('submit', (event) => {
    if (!validateEmails()) {
      event.preventDefault(); // Evita el envío si hay errores
    }
  });

  function validateEmails() {
    const existingAlert = form.querySelector('.alert');
    if (existingAlert) {
      existingAlert.remove();
    }

    if (email.value !== emailConfirm.value) {
      emailConfirm.parentElement.classList.add('error');
      emailConfirm.setAttribute('aria-invalid', 'true');
      const element = document.createElement('p');
      element.textContent = "Los correos electrónicos no coinciden";
      element.classList.add("alert");
      emailConfirm.parentElement.appendChild(element);
      return false;
    } else {
      emailConfirm.parentElement.classList.remove('error');
      emailConfirm.removeAttribute('aria-invalid');
      return true;
    }
  }
}

window.onload = emailValidation;
