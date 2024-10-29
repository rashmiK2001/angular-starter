import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationComponent } from './confirmation.component';



@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    DialogModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ConfirmationModule { }
