import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface SideNavToggle{
  scrrenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sidenav';
  logado:any;
  showHeader:any;

  constructor(private router: Router){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isLoginPage();
    });

  }

  isSideNavCollapsed = false;
  scrrenWidth = 0;
  viewMenu = false;

  onToggleSideNav(data: SideNavToggle ): void{
    this.scrrenWidth = data.scrrenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }

  ngOnInit(){

    this.carregaApp();


  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  carregaApp(){
    const auth = localStorage.getItem('user');


    if(auth){


      this.router.navigate(['home']);

    }else{
      this.router.navigate(['login']);
    }





  }
}
