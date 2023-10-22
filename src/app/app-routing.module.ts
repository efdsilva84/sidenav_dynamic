import { CredenciaisComponent } from './credenciais/credenciais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrosComponent } from './registros/registros.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'usuarios', component: UsuariosComponent},
  {path: 'registros', component: RegistrosComponent},
  {path: 'credenciais', component: CredenciaisComponent},
  {path: 'home', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
