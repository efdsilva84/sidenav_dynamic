import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:any;
  isLoading:boolean = false;
  tipo =  'password'



  constructor(private userService: UsersService, private router: Router, private messageService: MessageService, private toast: ToastService){

  }
  dadosForm = new FormGroup({
    cpf: new FormControl(null),
    senha: new FormControl(null),
  });




  mostrarSenha(){
    console.log('mostrou a senha');
    this.tipo = 'text'

  }
  signIn(dados:any){
    this.isLoading = true;
    console.log(this.dadosForm.value);
    this.userService.signIn(this.dadosForm.value).subscribe((data:any)=>{
      this.isLoading = false;
      console.log(data);
      if(data.error === false){
        localStorage.setItem('user', data.data);
        this.toast.showSuccess('Login realizado', 'Sucess');
        this.router.navigateByUrl('home');

      }
    })


  }
}

