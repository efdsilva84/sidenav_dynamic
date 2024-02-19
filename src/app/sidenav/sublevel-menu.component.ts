import { Component, Input } from '@angular/core';
import { INavbarData } from './helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
  <ul *ngIf="collapsed && data.items && data.items.length > 0" class="subleve-nav">
  <li *ngFor="let item of data.items" class="sublevel-nav-item">
    <a href="" class="sublevel-nav-link" *ngIf="item.items && item.items.length > 0"
    >
    <i class="sublevel-link-icon fa fa-circle"></i>
    <span class="sublevel-link-text" *ngIf="collapsed">item.Label</span>
    <i *ngIf="item.items && collapsed" class="menu-collapse-icon" [ngClass]="!item.expanded ? 'fal fa-angle-right': 'fal fa-angle-down'"
    ></i>
  </a>
  <a class="sublevel-nav-link" *ngIf="!item.items || item.items.length === 0" [routerLink]="[item.routeLink]"
  routerLinkActive="active-sublevel", [routerLinkActiveOptions]="{exact:true}"
  >
<i class="sublevel-link-icon fa fa-circle"></i>
<span class="sublevel-link-text" *ngIf="collapsed">{{item.Label}}</span>
</a>
<div *ngIf="item.items && item.items.length > 0">
  <app-sublevel-menu [collapsed]="collapsed"] [multiple]="multiple" [expanded]="expanded"]

  >

  </app-sublevel-menu>
</div>
  </li>

  </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
})
export class SublevelMenuComponent {

  @Input() data: INavbarData ={
    routeLink: '',
    icon: '',
    Label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean| undefined;

}
