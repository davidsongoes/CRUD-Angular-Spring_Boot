import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [MatToolbarModule, MatTableModule, MatCardModule, MatToolbarModule],
})
export class MaterialModule {}
