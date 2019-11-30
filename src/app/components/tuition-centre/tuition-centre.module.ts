import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuitionCentreRoutingModule } from './tuition-centre-routing.module';
import { AuthGuard } from '../../services/auth/auth.guard';
import { TuitionCentreComponent } from './tuition-centre.component'
import { FormsModule } from '@angular/forms';
import { SiteSidenavbarComponent } from '../common/site-sidenavbar/site-sidenavbar.component';

@NgModule({
  declarations: [
    TuitionCentreComponent,
    SiteSidenavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuitionCentreRoutingModule
  ],
  providers:[AuthGuard], 
})
export class TuitionCentreModule { }
