import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrosComponent } from './registros/registros.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesComponent } from './messages/messages.component';
import { LoaderComponent } from './loader/loader.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    UsuariosComponent,
    RegistrosComponent,
    HomeComponent,
    LoginComponent,
    MessagesComponent,
    LoaderComponent,
    UsuarioNovoComponent,
    UsuarioEditComponent,
    SublevelMenuComponent,
    CardapioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
