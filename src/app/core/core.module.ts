import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    RouterModule,
    ToolbarComponent
  ]
})
export class CoreModule { }
