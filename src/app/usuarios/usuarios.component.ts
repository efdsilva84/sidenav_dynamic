import { Component, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  allUser:any=[];
  listaUserApp:any=[];
  user:any;
  pessoas:any=[];
  userOpen:any=[];
  getuser:any;
  formulario!: FormGroup;
  listaEmpresas:any;
  listaLocal:any;
  visbileForm: boolean = false;
  isLoading:boolean = false;
  userPendente:any;

  url_img = this.api.url_sistema + "/assets/images/avatar/"



  constructor(private userService: UsersService, private api: ApiService, private router: Router, private cdr: ChangeDetectorRef, private fBuilder: FormBuilder, private toast: ToastService){

  }

  ngOnInit(){
    // this.userService.getAllUser().subscribe((data:any)=>{
    //   this.allUser = data.data;
    //   console.log(this.allUser);
    // });
    this.solicitacaoUserApp();
    this.uPendentes();
    this.listaUser();
  }

  listaUser(){
    this.isLoading = true;
        this.userService.getAllUser().subscribe((data:any)=>{
          this.allUser = data.data;
          this.isLoading = false;

          console.log(this.pessoas)
        });
  }

  bloqueaerPonto(id:any){
    console.log(id);
    const params ={
      id:id
    }
    this.userService.bolqueiaPonto(params).subscribe((data:any)=>{
      console.log(data);
      this.toast.showError(data.message);
      this.solicitacaoUserApp();
    })

  }

  desbloqueaerPonto(id:any){
    console.log(id);
    const params ={
      id:id
    }
    this.userService.desbolqueiaPonto(params).subscribe((data:any)=>{
      console.log(data);
      this.toast.showSuccess(data.message);
      this.solicitacaoUserApp();
    });



  }














  async viewUser(id:any){
    console.log('id user', id);
    const params = {id:id}
    this.userService.getUserId(params).subscribe(async (data:any)=>{
      if(data.error == false){
        this.getuser = data.data;
        console.log('usuario', this.getuser);
         let { id,nome, cpf, matricula, login, perfil, fk_inquilino, local_trabalho, fk_lider} = this.getuser[0];
         this.visbileForm = true;
          console.log(nome)
         this.fBuilder.nonNullable.group({
          id_hines: [local_trabalho, Validators.required],
          fk_inquilino: [fk_inquilino, Validators.required],
          nome: [nome, Validators.required],

        });
      }
    })
  }

  editUser(){

  }
  edit(){
    this.visbileForm = true;
    this.fBuilder.nonNullable.group({
      id_hines: ['', Validators.required],
      fk_inquilino: ['', Validators.required],
      nome: ['', Validators.required],

    });
  }

  desabilitaCampos(evento:any){

  }
  enviarFormulario(){

  }
  buscaLocalTrabalho(){
    this.userService.buscarLocal().subscribe((data:any)=>{
      console.log("hines",data);
      this.listaLocal = data.data;

    });
  }
  buscaEmpresas(evento:any){
    console.log(evento.target.value);
    const params = { id:evento.target.value}
    this.userService.getInquilinosPorChaves(params).subscribe((data:any)=>{
      console.log(data);
      this.listaEmpresas = data.data;

    });
  }
  solicitacaoUserApp(){
    this.userService.getAllUsersolicitacao().subscribe((data:any)=>{
      console.log(data);
      this.listaUserApp = data.data;
    })
  }
  uPendentes(){
    this.userService.getUserPendentes().subscribe((data:any)=>{
        this.userPendente = data.data;
        console.log('pede', this.userPendente);
    })
  }
  aprovaUser(item:any){
    const params = {id:item}
    this.userService.aprovaUser(params).subscribe((data:any)=>{
      console.log(data);
      this.solicitacaoUserApp();
    });

  }
  reprovaUser(item:any){
    const params = {id:item}
    this.userService.reprovaUser(params).subscribe((data:any)=>{
      console.log(data);
      // this.solicitacaoUserApp();
    });

  }
  bloquearUser(item:any){
    const params = { id:item}
    console.log(params)
      this.userService.edituser(params).subscribe((data:any)=>{
        /*uso da funçao edituser só para buscar o user na api*/
        this.user = data.data;
        console.log("this.user", this.user);
      });
  }

  async bloqueio(item:any){
    const params = { id:item}

     this.userService.bloquearUser(params).subscribe((data:any)=>{
      this.userService.getAllUser().subscribe((data:any)=>{
        this.allUser = data.data;
        console.log(this.allUser);
      });
    });

  }

  desbloquearUsuer(item:any){
    const params = { id:item}
    this.userService.edituser(params).subscribe((data:any)=>{
      this.user = data.data;
    });
  }
  desbloqueioUsuario(item:any){
    const params = { id:item}
    this.userService.desbloquearUser(params).subscribe((data:any)=>{
      console.log(data);
      this.userService.getAllUser().subscribe((data:any)=>{
        this.allUser = data.data;
        console.log(this.allUser);
      });

    })
  }



}
