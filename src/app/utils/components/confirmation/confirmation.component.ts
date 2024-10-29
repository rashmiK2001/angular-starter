import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  public close(event: any, value: boolean = false) {
    if (this.data.stopEvent) {
      event.stopPropagation();
    }
    this.dialogRef.close(value);
  }

  public confirm(event: any) {
    this.close(event, true);
  }

  @HostListener("keydown.esc")
  public onEsc(event: any) {
    this.close(event);
  }
}
