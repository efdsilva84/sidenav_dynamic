import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrosComponent } from './registros/registros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'registros', component: RegistrosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'usuario-novo', component: UsuarioNovoComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'cardapio', component: CardapioComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
