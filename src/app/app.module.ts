import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from 'src/Landing_page/landing_page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursecatelogComponent } from './coursecatelog/coursecatelog.component';
import { UserComponent } from './user/user.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { CourseDispComponent } from './course-disp/course-disp.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutusComponent,
    CoursecatelogComponent,
    UserComponent,
    CourseDetailComponent,
    StarComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    EnrolledCoursesComponent,
    CourseDispComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
