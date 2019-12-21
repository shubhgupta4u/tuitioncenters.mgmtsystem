import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuitionCentreRoutingModule } from './tuition-centre-routing.module';
import { AuthGuard } from '../../services/auth/auth.guard';
import { TuitionCentreComponent } from './tuition-centre.component'
import { FormsModule } from '@angular/forms';
import { SiteSidenavbarComponent } from '../common/site-sidenavbar/site-sidenavbar.component';
import { InstituteHeaderComponent } from '../common/institute-header/institute-header.component';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
import { InstituteFooterComponent } from '../common/institute-footer/institute-footer.component';
import { DirectiveModule } from 'src/app/directives/directive.module';
import { SharedModule } from '../common/shared.module';
import { InstituteTeachersComponent } from './institute-teachers/institute-teachers.component';
import { InstituteStudentsComponent } from './institute-students/institute-students.component';
import { InstituteBatchesComponent } from './institute-batches/institute-batches.component';
import { InstituteAssignmentsComponent } from './institute-assignments/institute-assignments.component';
import { InstituteFeesComponent } from './institute-fees/institute-fees.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InstituteSettingComponent } from './institute-setting/institute-setting.component';
import { SgGridComponent } from '../controls/sg-grid/sg-grid.component';

@NgModule({
  declarations: [
    TuitionCentreComponent,
    SiteSidenavbarComponent,
    InstituteDashboardComponent,
    InstituteTeachersComponent,
    InstituteStudentsComponent,
    InstituteBatchesComponent,
    InstituteAssignmentsComponent,
    InstituteFeesComponent,
    UserProfileComponent,
    InstituteSettingComponent,
    SgGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuitionCentreRoutingModule,
    DirectiveModule,
    SharedModule
  ],
  providers:[AuthGuard], 
})
export class TuitionCentreModule { }
