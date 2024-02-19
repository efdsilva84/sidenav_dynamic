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
export class CredenciaisService {

  constructor(private api: ApiService) {

  }

  getAllCredencias(){
    return this.api.get('registros/allcredenciais', false, httpOptions);
  }
  getTipoVeiculosCredenciais() {
    return this.api.get('cadastros/buscatipo_veiculo', false, httpOptions);
  }
  cadCarCredenciais(data:any) {
    return this.api.post('cadastros/novoveiculos', data, httpOptions);
  }
  searchTenants() {
    return this.api.get('cadastros/buscaempresas', false, httpOptions);
  }
  cadFuncCredenciais(data:any) {
    return this.api.post('cadastros/novousercredencial', data, httpOptions);
  }
  buscaUserCredenciais(){
    return this.api.get('cadastros/busca_func', false, httpOptions);
  }
  getAllVeiculos(){
    return this.api.get('registros/veiculos_cred', false, httpOptions);

  }
  getTurnos(){
    return this.api.get('cadastros/buscatipo_acesso', false, httpOptions);

  }
  verficaCredExiste(data:any) {
    return this.api.post('cadastros/verifica_exist', data, httpOptions);
  }
  cadCredencial(data:any){
    return this.api.post('cadastros/novaentrada', data, httpOptions);

  }
  atualizaStatusCar(data:any){
    return this.api.post('registros/atualizarstatuscar', data, httpOptions);

  }
  getCredencialId(data:any){
    return this.api.get('registros/credencial_id', data, httpOptions);
  }
  credTemporaria(data:any) {
    return this.api.post('registros/temporaria_credencial', data, httpOptions);
  }
  bloqueioCredencial(data:any) {
    return this.api.post('registros/bloqueia_credencial', data, httpOptions);
  }
  desbloqueiaCredencial(data:any) {
    return this.api.post('registros/desbloqueia_credencial', data, httpOptions);
  }
  definitivaCredencial(data:any) {
    return this.api.post('registros/definitiva_credencial', data, httpOptions);
  }
  getCredNumero(data:any) {
    return this.api.get('cadastros/getCredencial', data, httpOptions);
  }
  getCredEmpresa(data:any) {
    return this.api.post('cadastros/get_cred_empresa', data, httpOptions);
  }
  todasEntradasCredDia(){
    return this.api.get('cadastros/opencreddia', false, httpOptions);

  }
}
