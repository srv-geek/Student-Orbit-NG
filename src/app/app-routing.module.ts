import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ViewAllAttendanceComponent } from './components/view-all-attendance/view-all-attendance.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent
  },
  {
    path: 'faculty-dashboard', component: FacultyDashboardComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'all-users', component: AllUsersComponent
  },
  {
    path: 'edit-user/:username', component: EditUserComponent
  },
  {
    path: 'add-subject', component: AddSubjectComponent
  },
  {
    path: 'all-subjects', component: AllSubjectsComponent
  },
  {
    path: 'edit-subject/:id', component: EditSubjectComponent
  },
  {
    path: 'add-student', component: AddStudentComponent
  },
  {
    path: 'all-students', component: AllStudentsComponent
  },
  {
    path: 'edit-student/:id', component: EditStudentComponent
  },
  {
    path: 'view-all-attendance', component: ViewAllAttendanceComponent
  },
  {
    path: 'take-attendance', component: TakeAttendanceComponent
  },
  {
    path: 'view-attendance', component: ViewAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
