import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { PagosComponent } from './pages/pagos/pagos';
import { CarnetComponent } from './pages/carnet/carnet';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
 {path:'', component:InicioComponent},
 {path:'login', component:LoginComponent},
 {path:'register', component:RegisterComponent},
 {path:'dashboard', component:DashboardComponent},
 {path:'pagos', component:PagosComponent},
 {path:'carnet', component:CarnetComponent}
];