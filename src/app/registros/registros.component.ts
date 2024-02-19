import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { RegistrosService } from '../services/registros.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  @ViewChild('content', {static: false}) el!: ElementRef

  allRegistros:any=[];
  perfil:any;
  empresa:any;
  url_img = this.api.url_sistema + "/assets/images/"
  dados:any;
  isLoading:boolean = false;





  constructor(private router: Router, private registroService: RegistrosService, private api: ApiService){

  }
  ngOnInit(){
    this.empresa = localStorage.getItem('empresa');
    this.perfil = localStorage.getItem('perfil');
    this.registroService.getPontoDia().subscribe((data:any)=>{
        this.dados = data.data;
        console.log('ponsto', this.dados);
    });


}


searchData(d:any){
  this.isLoading = true;
  const params ={ponto_data:d.target.value}
  console.log('data escolhindo', d.target.value);
  console.log('data enviada', params);
  this.registroService.getPontoData(params).subscribe((data:any)=>{
    this.isLoading = false;
    this.dados = data.data;
    console.log('change de data', this.dados)
  })


}

gerarPDF(){
  let pdf = new jsPDF('p', 'pt', 'a4');

  pdf.html(this.el.nativeElement, {
    callback:(pdf)=>{
      pdf.save("lista.pdf");

    }
  });






}

verAut(item:any){
  console.log("id registros",item);
  const params ={ id: item}
  console.log("id do registroa ser enviado", params);
   this.registroService.verAs(params).subscribe((data:any)=>{
        console.log(data.data);
        this.allRegistros = data.data;

  });

}

printSimplePDF(){
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: [8, 4]
  });
  doc.save("as.pdf");
}
allRegistroDia(){
  this.registroService.getAllRegistrosPorDia().subscribe((data:any)=>{
    this.allRegistros = data.data;
    console.log(this.allRegistros);

  })
}
allContainers(){
  this.registroService.getAllRegistrosContainers().subscribe((data:any)=>{
    this.allRegistros = data.data;
    console.log(this.allRegistros);
  })
}
allCarretas(){
  this.registroService.getAllRegistrosCarretas().subscribe((data:any)=>{
    this.allRegistros = data.data;

  })
}
allBaus(){
  this.registroService.getAllRegistrosBau().subscribe((data:any)=>{
    this.allRegistros = data.data;
  });
}
allApps(){
  this.registroService.getAllApps().subscribe((data:any)=>{
    this.allRegistros = data.data;
    console.log(this.allRegistros);

  })
}


}
