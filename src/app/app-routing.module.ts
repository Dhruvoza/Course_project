import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LandingComponent } from 'src/Landing_page/landing_page.component';
import { CoursecatelogComponent } from './coursecatelog/coursecatelog.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { CourseDispComponent } from './course-disp/course-disp.component';

const routes: Routes = [
  {
    path: '', redirectTo:'home', pathMatch:'full' 
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'home', component: LandingComponent
  },
  {
    path: 'catalog', component: CoursecatelogComponent
  },
  {
    path: 'detail/:id', component: CourseDetailComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'enrolledcourses', component: EnrolledCoursesComponent
  },
  {
    path: 'coursedisplay', component: CourseDispComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
