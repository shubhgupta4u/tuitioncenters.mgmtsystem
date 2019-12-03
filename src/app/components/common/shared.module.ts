import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteHeaderComponent } from './institute-header/institute-header.component';
import { InstituteFooterComponent } from './institute-footer/institute-footer.component';


@NgModule({
  declarations: [InstituteHeaderComponent, InstituteFooterComponent],
  exports: [InstituteHeaderComponent, InstituteFooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
