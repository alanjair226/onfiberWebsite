async function enviarFormulario(event: Event): Promise<void> {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
  
    // Obtiene los valores del formulario
    const planSelect = document.querySelector('select') as HTMLSelectElement;
    const numeroWhatsappInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    
    const plan = planSelect.value;
    const numeroWhatsapp = numeroWhatsappInput.value;
  
    // Valida que los campos no estén vacíos
    if (!plan || !numeroWhatsapp) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Crea el payload para la petición
    const payload = {
      plan,
      numeroWhatsapp
    };
  
    try {
      // Realiza la petición POST a la API
      const response = await fetch('URL_DE_TU_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      // Maneja la respuesta de la API
      if (response.ok) {
        alert('Tu solicitud ha sido enviada con éxito.');
      } else {
        alert('Hubo un problema al enviar tu solicitud. Inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar tu solicitud. Inténtalo nuevamente.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    if (formulario) {
      formulario.addEventListener('submit', enviarFormulario);
    }
  });
  