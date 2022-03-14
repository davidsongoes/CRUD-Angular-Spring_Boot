import { MaterialModule } from './../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosListComponent } from './containers/cursos-list/cursos-list.component';
import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [CursosListComponent],
  imports: [CommonModule, CursosRoutingModule, MaterialModule],
})
export class CursosModule {}
