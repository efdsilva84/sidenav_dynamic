import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrosService } from '../services/registros.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user:any;

  allRegistros:any=[];
  listaFuncionarios:any;
  qtdFuncionarios:any;
  pontosBatidosDias:any;
  qtdPontos:any;
  refeicao:any;
  pontos:any;


  constructor(private router: Router, private registroService: RegistrosService, private userService: UsersService){

  }

  ngOnInit(){
    this.getAllFuncionariosApp();
    this.getAllPontoDia();
    // this.refeicoesDia();

  }

  getAllFuncionariosApp(){
    this.userService.getAllUsersolicitacao().subscribe((data:any)=>{
      this.listaFuncionarios = data.data;
      this.qtdFuncionarios = this.listaFuncionarios.length

      console.log('todos os funcionaros', this.listaFuncionarios);


    });
  }
getAllPontoDia(){
  this.registroService.getPontoDia().subscribe((data:any)=>{
      this.pontosBatidosDias = data.data;
      this.qtdPontos = this.pontosBatidosDias.length;
      console.log('pontos registrados dia', this.pontosBatidosDias);

  });
}

// refeicoesDia(){
//   this.registroService.getPontoDia().subscribe((data:any)=>{
//       this.refeicao = data.data;
//       console.log('refeiçoes do dia', this.refeicao);
//       this.pontos = this.refeicao.length;
//   });
// }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);

  }



}
