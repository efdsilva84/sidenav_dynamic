import { Component, ElementRef, ViewChild } from '@angular/core';
import { RegistrosService } from '../services/registros.service';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  @ViewChild('content', {static: false}) el!: ElementRef

  refeicao:any;
  refeicaoDia:any;
  proteinas:any;
  isLoading:boolean = false;
  dataCardapio:any;


  constructor(private rg: RegistrosService, private userService: UsersService, private toast:ToastService){

  }
  ngOnInit(){
    this.refeicoesDia();
    this.listaRefeicoes();
    this.listaRefeicaoDia();
  }
  dadosForm = new FormGroup({
    proteina: new FormControl(null),
  });

refeicoesDia(){
  this.rg.getPontoDia().subscribe((data:any)=>{
      this.refeicao = data.data;
  });
}

listaRefeicoes(){
  this.isLoading = true;
  this.userService.getCardapio().subscribe((data:any)=>{
    this.isLoading = false
    this.proteinas = data.data;
    console.log('lista de proteinas', this.proteinas);
  })
}
listaRefeicaoDia(){
  this.isLoading = true
  this.userService.getCardapioDia().subscribe((data:any)=>{
    this.isLoading = false;
    this.refeicaoDia = data.data;
    console.log('lista proteinas do dia', this.refeicaoDia);
    this.dataCardapio = this.refeicaoDia[0].data_format


  })
}

addProteinaApp(item:any){
  console.log('item a ir pra lista', item.id_item);
  const params ={
    proteina_id:item.id_item
  }
  this.rg.insertItemListaDia(params).subscribe((data:any)=>{
    if(data.error === false){
      this.toast.showSuccess('Proteína adicionada');
    }else{
      this.toast.showError('Error');
    }
    this.listaRefeicaoDia();
  })

}
deleteProteina(item:any){
  console.log('id a ser deletado',item.proteina_id);
  const params={id:item.proteina_id}
  this.rg.updateItemListaDia(params).subscribe((data:any)=>{
    console.log(data);
    if(data.error === false){
      this.toast.showSuccess('Proteína removida');
      this.listaRefeicaoDia();

    }else{
      this.toast.showError('Error');
    }
  })
}

sendForm(form:any){
  console.log('form', form.value);
  this.rg.insertProteina(this.dadosForm.value).subscribe((data:any)=>{
    if(data.error === false){
      this.listaRefeicoes();
      this.toast.showSuccess(data.message, "Success");
      form.reset();

    }else{
      this.toast.showError(data.message, "Error");
    }
  });


}


gerarPDF(){
  let pdf = new jsPDF('p', 'pt', 'a4');

  pdf.html(this.el.nativeElement, {
    callback:(pdf)=>{
      pdf.save("lista.pdf");

    }
  });
}
}
