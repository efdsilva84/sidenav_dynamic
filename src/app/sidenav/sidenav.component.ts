import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
  scrrenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  ngOnInit(): void {
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
