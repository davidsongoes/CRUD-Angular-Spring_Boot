import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericSnackBarComponent } from './generic-snack-bar/generic-snack-bar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    GenericSnackBarComponent,
    GenericDialogComponent,
    CategoryPipe,
  ],
  imports: [CommonModule, MaterialModule, OverlayModule],
  exports: [GenericSnackBarComponent, GenericDialogComponent, CategoryPipe],
})
export class SharedModule {}
