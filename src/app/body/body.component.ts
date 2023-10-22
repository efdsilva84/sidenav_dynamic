import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() scrrenWidth = 0;

  getBodyClass():string{
    let styleClass = '';
    if(this.collapsed && this.scrrenWidth > 768){
      styleClass = 'body-trimed';
    }else if(this.collapsed && this.scrrenWidth <=768 && this.scrrenWidth > 0){
      styleClass = 'body-md-screen'
    }

    return styleClass;

  }
}
