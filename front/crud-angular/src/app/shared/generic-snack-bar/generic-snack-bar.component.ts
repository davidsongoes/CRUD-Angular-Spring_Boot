import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'crud-generic-snack-bar',
  templateUrl: './generic-snack-bar.component.html',
  styleUrls: ['./generic-snack-bar.component.scss'],
})
export class GenericSnackBarComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, config?: MatSnackBarConfig) {
    this._snackBar.open(message, action, config);
  }
}
