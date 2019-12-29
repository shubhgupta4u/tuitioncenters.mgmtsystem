import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuitionCentreRoutingModule } from './tuition-centre-routing.module';
import { AuthGuard } from '../../services/auth/auth.guard';
import { TuitionCentreComponent } from './tuition-centre.component'
import { FormsModule } from '@angular/forms';
import { SiteSidenavbarComponent } from '../common/site-sidenavbar/site-sidenavbar.component';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
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
import { GridColumnFilterPipe } from 'src/app/pipes/grid-column-filter.pipe';
import { EditTeacherComponent } from './institute-teachers/edit-teacher/edit-teacher.component';
import { SgTexteditorComponent } from '../controls/sg-texteditor/sg-texteditor.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SgDatepickerComponent } from '../controls/sg-datepicker/sg-datepicker.component';
import { SgCurrencyeditorComponent } from '../controls/sg-currencyeditor/sg-currencyeditor.component';
import { SgDropdownComponent } from '../controls/sg-dropdown/sg-dropdown.component';

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
    SgGridComponent,
    SgTexteditorComponent,
    GridColumnFilterPipe,
    EditTeacherComponent,
    SgDatepickerComponent,
    SgDropdownComponent,
    SgCurrencyeditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuitionCentreRoutingModule,
    DirectiveModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  providers:[AuthGuard], 
})
export class TuitionCentreModule { }
