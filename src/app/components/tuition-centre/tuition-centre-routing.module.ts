import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth/auth.guard';
import { TuitionCentreComponent } from './tuition-centre.component'

const routes: Routes = [
  { path: '', component: TuitionCentreComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuitionCentreRoutingModule { }
