import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListComponent } from './containers/cursos-list/cursos-list.component';


@NgModule({
  declarations: [
    CursosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
  ]
})
export class CursosModule { }
