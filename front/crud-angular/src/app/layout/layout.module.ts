import { MaterialModule } from './../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterbarComponent } from './footerbar/footerbar.component';
import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent, LayoutComponent, FooterbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
