import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink], // Ya no necesitas obligatoriamente FormsModule aquí
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {

  @HostListener('document:mousemove', ['$event'])
  moverCuadros(event: MouseEvent) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box: any, i) => {
      setTimeout(() => {
        box.style.left = event.clientX + (i * 15) + 'px';
        box.style.top = event.clientY + (i * 15) + 'px';
      }, i * 80);
    });
  }

  irBeneficios() {
    document.getElementById('beneficios')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }

  // Modificado para recibir el texto directo del DOM
  procesarEnvio(event: Event, texto: string) {
    event.preventDefault();

    // Validamos que el cuadro no esté vacío
    if (!texto || !texto.trim()) {
      alert('Por favor, escribe una sugerencia antes de presionar enviar.');
      return;
    }

    const urlWeb3Forms = 'https://api.web3forms.com/submit';

    // Creamos el objeto con tu clave real de Web3Forms
    const payload = {
      access_key: '2b0db3bc-05a4-4638-9c4d-9ad1d6305605',
      subject: 'Nueva Sugerencia - Carnet Digital UNAMBA',
      from_name: 'Sistema Carnet Digital',
      sugerencia_estudiante: texto.trim()
    };

    fetch(urlWeb3Forms, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      // Web3Forms responde con success: true si todo salió bien
      if (data.success) {
        alert('¡Gracias por tu aporte! Tu sugerencia ha sido registrada con éxito.');
      } else {
        alert('Hubo un inconveniente en el servidor: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error en la petición:', error);
      alert('Error de conexión con el servidor de formularios.');
    });
  }
}