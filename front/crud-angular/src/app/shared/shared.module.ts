import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericSnackBarComponent } from './generic-snack-bar/generic-snack-bar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

@NgModule({
  declarations: [GenericSnackBarComponent, GenericDialogComponent],
  imports: [CommonModule, MaterialModule, OverlayModule],
  exports: [GenericSnackBarComponent, GenericDialogComponent],
})
export class SharedModule {}
