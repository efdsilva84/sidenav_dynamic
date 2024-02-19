import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { RegistrosService } from '../services/registros.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css']
})
export class UsuarioNovoComponent {
  listaLocal:any;
  listaEmpresas:any;

  local_trabalho!:number;
  fk_inquilino!:number;

  image: File | null = null;
  erros:any=[];
  isLoading:boolean = false;
  loadingTitle:string = 'Loading';
  dados:any;
  perfil!:string;
  email: any;
  url:any;
  dadosUser = this.createForm();
  avatarUrl!: string;
  selectedFileName?: string;



  // dadosUser!: FormGroup





  constructor(private userService: UsersService, private rg: RegistrosService, private toast: ToastService, private formBuilder:FormBuilder, private fBuilder: FormBuilder){

  }


  ngOnInit(){
      this.rg.getAllFunctions().subscribe((data:any)=>{
          this.dados = data. data;
      });



  }
  fileToBase64(event: Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('input Element', inputElement);
    const file = inputElement.files![0];

    this.selectedFileName = file?.name;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      this.avatarUrl = (fileReader.result as string).split(',')[1];
    };

    fileReader.readAsDataURL(file);


  }
  // onfileSelected(evento:any){
  //   const file = evento.srcElement.files[0];
  //   console.log('imagem', file);

  //   // if(file){
  //   //   let reader = new FileReader();
  //   //   reader.readAsDataURL(evento.target.files[0]);
  //   //   reader.onload = ( evento:any)=>{
  //   //     this.url = evento.target.result;
  //   //     this.dadosUser.patchValue({image: file});
  //   //     console.log(this.dadosUser.value);


  //   //   }
  //   // }
  // }



  private createForm() {
    return this.fBuilder.nonNullable.group({
      funcao: ['', Validators.required],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      mt: ['', Validators.required],
      telefone: ['', Validators.required],

    });
  }

  private getSalvarRgPayload() {
    const form = this.dadosUser.getRawValue();
    return {
      funcao:form.funcao,
      nome:form.nome,
      cpf: form.cpf,
      mt: form.mt,
      telefone:form.telefone,
      avatar: this.avatarUrl,


    };
  }


  dadosForm = new FormGroup({
    cargo: new FormControl(null,[Validators.required]),
  });


  sendFormCargo(){
    console.log('formi', this.dadosForm.value);
    this.rg.insertNovoCargo(this.dadosForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.error === false){
        this.rg.getAllFunctions().subscribe((data:any)=>{
          this.dados = data. data;
        });
        this.dadosForm.reset();
        this.toast.showSuccess(data.message, "Success");
      }else{
        this.toast.showSuccess('Preencha o cargo');
      }
    })


  }


  enviarFormulario(){
    this.isLoading = true;
    this.loadingTitle = 'Salvando';
    console.log(this.dadosUser.value);
    // const formData = new FormData();
    // formData.append('image', this.dadosUser.get('image')?.value);
    this.userService.newUser(this.getSalvarRgPayload()).subscribe((data:any)=>{
      this.isLoading = false;
          console.log(data);
          if(data.error === false){

            this.toast.showSuccess(data.message, "success");
            this.dadosUser.reset();

          }
    });

  }






}
