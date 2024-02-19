import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ApiService } from '../services/api.service';

interface SideNavToggle{
  scrrenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity:0}),
        animate('350ms', style({opacity:0})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)', offset:'0'}),
          style({transform:'rotate(2turn)', offset:'1'}),

        ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  id_usuario:any;
  logo:any;
  url_img = this.api.url_sistema + "/assets/images/"




  constructor( private api: ApiService,){

  }

  ngOnInit(): void {
   this.id_usuario = localStorage.getItem('user');
   this.logo = localStorage.getItem('logo')
   console.log('nome user', this.id_usuario, this.logo);
    this.scrrenWidth = window.innerWidth;
  }


  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = true;
  scrrenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.scrrenWidth = window.innerWidth;
    if(this.scrrenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed, scrrenWidth: this.scrrenWidth});

    }
  }


  toogleCollapse(): void{
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed:this.collapsed, scrrenWidth: this.scrrenWidth});



  }
  closeSidenav():void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, scrrenWidth: this.scrrenWidth});

  }


}
