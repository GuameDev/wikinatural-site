import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PxConstants } from '../constants/px-sizes.constant';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  
  getBodyClass():string {
    let styleClass = '';

    if(this.isBodyTrimmed()){
      return 'body-trimmed';
    }

    if (this.isBodyMdScreen()){
      styleClass = 'body-md-screen'
    }
    return styleClass
  }

  private isBodyMdScreen() {
    return this.collapsed && this.screenWidth <= PxConstants.md && this.screenWidth > 0;
  }

  private isBodyTrimmed() {
    return this.collapsed && this.screenWidth <= PxConstants.md;
  }
}
