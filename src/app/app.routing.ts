import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { TeachersSignupComponent } from './teachers-signup/teachers-signup.component';
import { SchoolsSignupComponent } from './schools-signup/schools-signup.component';
import { StudentsSignupComponent } from './students-signup/students-signup.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { SettingsComponent } from './settings/settings.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PapersDemandDashboardComponent } from './papers-demand-dashboard/papers-demand-dashboard.component';
import { SchoolAdminManagementDashboardComponent } from './school-admin-management-dashboard/school-admin-management-dashboard.component';
import { DemanderPapiersComponent } from './demander-papiers/demander-papiers.component';
import { ModifyGroupComponent } from './modify-group/modify-group.component';

const routes: Routes =[
    { path: 'profile',     component: ProfileComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'learnmore',      component: MoreInfoComponent },
    { path: 'teachers-signup',      component: TeachersSignupComponent },
    { path: 'schools-signup',      component: SchoolsSignupComponent },
    { path: 'students-signup',      component: StudentsSignupComponent },
    { path: 'admin-dashboard',      component: AdminDashboardComponent },
    { path: 'teacher-dashboard',      component: TeacherDashboardComponent },
    { path: 'student-dashboard',      component: StudentDashboardComponent },
    { path: 'forgot-password',      component: ForgottenPasswordComponent },
    { path: 'settings',      component: SettingsComponent },
    { path: 'add-group',      component: AddGroupComponent },
    { path: 'add-teacher',      component: AddTeacherComponent },
    { path: 'add-student',      component: AddStudentComponent },
    { path: 'demandes-papiers',      component: PapersDemandDashboardComponent },
    { path: 'demander-papiers',      component: DemanderPapiersComponent },
    { path: 'admin-control-panel',      component: SchoolAdminManagementDashboardComponent },
    { path: 'modify-group',      component: ModifyGroupComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
