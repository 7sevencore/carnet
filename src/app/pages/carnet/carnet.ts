import { Component } from '@angular/core';

@Component({
 selector:'app-carnet',
 standalone:true,
 templateUrl:'./carnet.html'
})
export class CarnetComponent{
 nombre=localStorage.getItem('nombre');
 codigo=localStorage.getItem('codigo');
 foto=localStorage.getItem('foto');
 barra=localStorage.getItem('barra');
}