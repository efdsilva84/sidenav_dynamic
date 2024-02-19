import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Admin 123456'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService) {

  }

  signIn(data:any) {
    return this.api.post('empresa/logar', data, httpOptions);
  }
  newUser(data:any){
    return this.api.post('empresa/novo_user', data, httpOptions);
  }
  getCardapio(){
    return this.api.get('empresa/get_cardapio', false, httpOptions);

  }
  getCardapioDia(){
    return this.api.get('empresa/get_cardapio_dia_atual', false, httpOptions);

  }
  getAllUsersolicitacao(){
    return this.api.get('empresa/get_all_funcionarios', false, httpOptions);

  }
  getUserPendentes(){
    return this.api.get('empresa/all_users_pendentes', false, httpOptions);

  }
  bolqueiaPonto(data:any){
    return this.api.get('empresa/bloqueia_ponto', data, httpOptions);

  }
  desbolqueiaPonto(data:any){
    return this.api.get('empresa/desbloqueia_ponto', data, httpOptions);

  }
















        // metodo para logar
  loginUsuario(data: any) {
  return this.api.post('cadastros/logar', data, httpOptions);
    }

  cadUsers(data:any) {
    return this.api.post('cadastros/novouser', data, httpOptions);
  }
  getAllUser() {
    return this.api.get('cadastros/buscarusuarios', false, httpOptions);
  }
  solicitacaoApp() {
    return this.api.get('cadastros/buscarusuarios_solicitacao', false, httpOptions);
  }
  aprovaUser(data:any) {
    return this.api.get('cadastros/aprova_usuario', data, httpOptions);
  }
  reprovaUser(data:any) {
    return this.api.get('cadastros/reprova_usuario', data, httpOptions);
  }
  edituser(data:any) {
    return this.api.get('cadastros/getuserid2', data, httpOptions);
  }
  bloquearUser(data:any) {
    return this.api.post('registros/bloqueia_user', data, httpOptions);
  }
  desbloquearUser(data:any) {
    return this.api.post('registros/desbloqueia_user', data, httpOptions);
  }
  getUserId(data:any) {
    return this.api.get('cadastros/getuserid2', data, httpOptions);
  }
  getInquilinosPorChaves(data:any) {
    return this.api.get('cadastros/buscaempresas_por_chave', data, httpOptions);
  }
  buscarLocal(){
    return this.api.get('cadastros/buscarlocal', false, httpOptions);

  }
  atualizaUser(data:any) {
    return this.api.post('registros/atualizar_dados_user', data, httpOptions);
  }
  buscaInquilinos() {
    return this.api.get('cadastros/buscaempresas', false, httpOptions);
  }


}
