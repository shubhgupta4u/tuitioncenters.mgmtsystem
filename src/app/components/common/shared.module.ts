import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteHeaderComponent } from './institute-header/institute-header.component';
import { InstituteFooterComponent } from './institute-footer/institute-footer.component';
import { InstitutePageNavbarComponent } from './institute-page-navbar/institute-page-navbar.component';


@NgModule({
  declarations: [InstituteHeaderComponent, InstituteFooterComponent, InstitutePageNavbarComponent],
  exports: [InstituteHeaderComponent, InstituteFooterComponent,InstitutePageNavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
