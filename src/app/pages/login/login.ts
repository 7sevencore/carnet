import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
 selector:'app-login',
 standalone:true,
 imports:[FormsModule],
 templateUrl:'./login.html',
 styleUrl:'./login.css'
})
export class LoginComponent{
 usuario='';
 password='';

 constructor(private router:Router){}

 ingresar(){
   this.router.navigate(['/dashboard']);
 }

 registrarse(){
   this.router.navigate(['/register']);
 }
}