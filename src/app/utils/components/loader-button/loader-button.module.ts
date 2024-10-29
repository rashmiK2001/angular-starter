import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderButtonComponent } from './loader-button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoaderButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [LoaderButtonComponent]
})
export class LoaderButtonModule { }
