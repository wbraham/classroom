import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MoreInfoComponent } from './more-info/more-info.component';
import { TeachersSignupComponent } from './teachers-signup/teachers-signup.component';
import { StudentsSignupComponent } from './students-signup/students-signup.component';
import { SchoolsSignupComponent } from './schools-signup/schools-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavigationAdminComponent } from './shared/navigation-admin/navigation-admin.component';
import { AdminSidebarComponent } from './shared/admin-sidebar/admin-sidebar.component';
import { NavigationStudentComponent } from './shared/navigation-student/navigation-student.component';
import { NavigationTeacherComponent } from './shared/navigation-teacher/navigation-teacher.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { SettingsComponent } from './settings/settings.component';
import { DemanderPapiersComponent } from './demander-papiers/demander-papiers.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { PapersDemandDashboardComponent } from './papers-demand-dashboard/papers-demand-dashboard.component';
import { SchoolAdminManagementDashboardComponent } from './school-admin-management-dashboard/school-admin-management-dashboard.component';
import { ModifyGroupComponent } from './modify-group/modify-group.component';
import { TeacherSidebarComponent } from './shared/teacher-sidebar/teacher-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ProfileComponent,
    FooterComponent,
    MoreInfoComponent,
    TeachersSignupComponent,
    StudentsSignupComponent,
    SchoolsSignupComponent,
    AdminDashboardComponent,
    NavigationAdminComponent,
    NavbarComponent,
    AdminSidebarComponent,
    NavigationStudentComponent,
    NavigationTeacherComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ForgottenPasswordComponent,
    SettingsComponent,
    DemanderPapiersComponent,
    AddGroupComponent,
    AddStudentComponent,
    AddTeacherComponent,
    PapersDemandDashboardComponent,
    SchoolAdminManagementDashboardComponent,
    ModifyGroupComponent,
    TeacherSidebarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
