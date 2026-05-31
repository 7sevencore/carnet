import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:'app-pagos',
  standalone:true,
  templateUrl:'./pagos.html',
  styleUrls:['./pagos.css']
})
export class PagosComponent{

  yapeNumero = '987654321';
  cuentaBN = '04-123-456789';

  constructor(private router: Router){}

  confirmarPago(){

    alert("Pago realizado correctamente");

    this.router.navigate(['/carnet']);

  }

}