import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../services/auth/auth.guard';
import { TuitionCentreComponent } from './tuition-centre.component'
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';
import { InstituteTeachersComponent } from './institute-teachers/institute-teachers.component';
import { InstituteStudentsComponent } from './institute-students/institute-students.component';
import { InstituteBatchesComponent } from './institute-batches/institute-batches.component';
import { InstituteAssignmentsComponent } from './institute-assignments/institute-assignments.component';
import { InstituteFeesComponent } from './institute-fees/institute-fees.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { InstituteSettingComponent } from './institute-setting/institute-setting.component';
import { EditTeacherComponent } from './institute-teachers/edit-teacher/edit-teacher.component';

const routes: Routes = [
  {
    path: '', component: TuitionCentreComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: InstituteDashboardComponent },
      { path: 'teacher', component: InstituteTeachersComponent },
      { path: 'teacher/:id', component: EditTeacherComponent },
      { path: 'student', component: InstituteStudentsComponent },
      { path: 'batch', component: InstituteBatchesComponent },
      { path: 'assignment', component: InstituteAssignmentsComponent },
      { path: 'fees', component: InstituteFeesComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'setting', component: InstituteSettingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuitionCentreRoutingModule { }
