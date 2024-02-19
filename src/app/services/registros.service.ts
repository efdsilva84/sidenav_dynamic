import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Admin 123456'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private api: ApiService) {

  }
  getPontoDia(){
    return this.api.get('empresa/get_pontos_dia', false, httpOptions);

  }
  getAllFunctions(){
    return this.api.get('empresa/get_all_funcoes', false, httpOptions);

  }
  insertProteina(data:any){
    return this.api.post('empresa/insert_proteina_app', data, httpOptions);

  }
  insertNovoCargo(data:any){
    return this.api.post('empresa/insert_novo_cargo', data, httpOptions);

  }
  insertItemListaDia(data:any){
    return this.api.post('empresa/novo_cardapio_dia_app', data, httpOptions);

  }
  updateItemListaDia(data:any){
    return this.api.get('empresa/update_status_proteina_dia', data, httpOptions);

  }

  getPontoData(data:any){
    return this.api.post('empresa/get_ponto_data', data, httpOptions);

  }


  getAllRegistrosCarretas() {
    return this.api.get('registros/todoscarreta', false, httpOptions);
  }
  getAllRegistrosContainers() {
    return this.api.get('registros/todoscontainers', false, httpOptions);
  }
  getAllRegistrosBau() {
    return this.api.get('registros/todosbau', false, httpOptions);
  }
  getAllRegistroApss() {
    return this.api.get('registros/apps', false, httpOptions);
  }
  getAllRegistrosPorDia(){
    return this.api.get('registros/registros_dia_empresa2', false, httpOptions);

  }
  getAllRegistrosPorDiaInquilino(data:any){
    return this.api.get('registros/registros_por_chave_empresa', data, httpOptions);

  }
  getAllApps(){
    return this.api.get('registros/apps', false, httpOptions);

  }
  verAs(data:any){
    return this.api.get('registros/ver_as', data, httpOptions);
  }



}
