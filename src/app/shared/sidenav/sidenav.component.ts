import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavData } from './models/nav-data.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideNavToggle } from './models/sidenav-toggle.mode';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIcon,
    MatListModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData: NavData[] = [
    {
      routeLink: 'dashboard',
      icon: 'home',
      label: 'Dashboard',
    },
  ];

  constructor() {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.emitSideNavToggle();
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.emitSideNavToggle();
  }

   emitSideNavToggle() {
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
