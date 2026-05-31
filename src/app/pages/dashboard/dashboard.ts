import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-dashboard',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./dashboard.html',
  styleUrls:['./dashboard.css']
})
export class DashboardComponent{

  nombre = '';
  codigo = '';
  foto:any = '';
  barra:any = '';

  constructor(private router: Router){}

  subirFoto(e:any,t:string){
    const f = e.target.files[0];

    if(!f) return;

    const r = new FileReader();

    r.onload = () => {
      if(t == 'foto'){
        this.foto = r.result;
      }else{
        this.barra = r.result;
      }
    };

    r.readAsDataURL(f);
  }

  generarCarnet(){

    if(this.nombre == '' || this.codigo == ''){
      alert("Complete todos los campos");
      return;
    }

    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('codigo', this.codigo);
    localStorage.setItem('foto', this.foto);
    localStorage.setItem('barra', this.barra);

    alert("Redirigiendo a pagos...");

    this.router.navigate(['/pagos']);
  }
}