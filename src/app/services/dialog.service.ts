import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material";
import { MatConfirmDialogComponent } from '../modules/complete-angular-material-app/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px' },
      data: {
        message: msg
      }
    })
  }

}
