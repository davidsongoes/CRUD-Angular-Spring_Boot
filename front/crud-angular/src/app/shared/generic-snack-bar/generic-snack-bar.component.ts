import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'crud-generic-snack-bar',
  templateUrl: './generic-snack-bar.component.html',
  styleUrls: ['./generic-snack-bar.component.scss'],
})
export class GenericSnackBarComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
