import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, take } from 'rxjs';
import { AlertDialogComponent } from '../../utils/components/alert-dialog/alert-dialog.component';
import { ConfirmationComponent } from '../../utils/components/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openAlertDialog({ title = "Confirm", message = '', confirmText = "Confirm" }): Observable<any> {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        title: title,
        message: message,
        confirmText: confirmText
      },
      panelClass: 'dialog-wrapper',
      width: '700px'
    })

    return dialogRef.afterClosed()
      .pipe(
        take(1),
        map(res => {
          return res;
        })
      )
  }

  openConfirmDialog({ title = "Confirm", message = '', cancelText = 'Cancel', confirmText = "Confirm", stopEvent = false }): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: title,
        message: message,
        cancelText: cancelText,
        confirmText: confirmText,
        stopEvent: stopEvent
      },
      panelClass: 'confirm-dialog-wrapper',
      width: '500px'
    })

    return dialogRef.afterClosed()
      .pipe(
        take(1),
        map(res => {
          return res;
        })
      )
  }
}
