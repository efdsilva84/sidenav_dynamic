import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent {
  isLoading:boolean = false;
  loadingTitle:string = 'Loading';
  user!:any;
  userId!:any;
  listaLocal:any;
  listaEmpresas:any;
  formulario!: FormGroup;
  inquilinos:any;

  constructor(private route: ActivatedRoute, private userService: UsersService, private fBuilder: FormBuilder ){
          this.formulario = this.fBuilder.group({
            local_trabalho: ['', Validators.required],
            fk_inquilino: ['', Validators.required],
            perfil: ['', Validators.required],
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
            matricula: ['', Validators.required],
            login: ['', Validators.required],
            id:['', Validators.required]

          })
  }


  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
    this.loadUserData();

  }

  loadUserData(){
    const params ={id:this.userId}
    this.userService.getUserId(params).subscribe((data:any)=>{
            this.user = data.data[0];
            console.log(data);
      this.buscaLocalTrabalho();
      this.getInquilinos();

      this.formulario.patchValue({
        local_trabalho:this.user.id_hines,
        fk_inquilino:this.user.fk_inquilino,
        perfil:this.user.perfi,
        nome:this.user.nome,
        cpf:this.user.cpf,
        matricula:this.user.matricula,
        login:this.user.login,
        id:this.user.id
      })

    })
  }

  buscaLocalTrabalho(){
    this.userService.buscarLocal().subscribe((data:any)=>{
      console.log("hines",data);
      this.listaLocal = data.data;

    });
  }

  getInquilinos(){
    this.userService.buscaInquilinos().subscribe((data:any)=>{
        this.inquilinos = data.data;
        console.log(this.inquilinos);
    })
  }

  buscaEmpresas(evento:any){
    console.log(evento.target.value);
    const params = { id:evento.target.value}
    this.userService.getInquilinosPorChaves(params).subscribe((data:any)=>{
      console.log(data);
      this.listaEmpresas = data.data;

    });
  }

  updateUser(){
    console.log(this.formulario.value);
      this.userService.atualizaUser(this.formulario.value).subscribe((data:any)=>{
          if(data.error == false){
            this.formulario.reset();

          }
      })
  }



}
