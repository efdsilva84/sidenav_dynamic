import { Component } from '@angular/core';

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

  isSideNavCollapsed = false;
  scrrenWidth = 0;

  onToggleSideNav(data: SideNavToggle ): void{
    this.scrrenWidth = data.scrrenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
}
