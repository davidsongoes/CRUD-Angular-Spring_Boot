import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from './layout.component';
import { FooterbarComponent } from './footerbar/footerbar.component';




@NgModule({
  declarations: [
    ToolbarComponent,
    LayoutComponent,
    FooterbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
