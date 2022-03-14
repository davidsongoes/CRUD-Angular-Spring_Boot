import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericSnackBarComponent } from './generic-snack-bar/generic-snack-bar.component';

@NgModule({
  declarations: [GenericSnackBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [GenericSnackBarComponent],
})
export class SharedModule {}
