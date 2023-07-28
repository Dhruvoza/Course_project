import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent {
  courses:any = [];
  name:string = "";

  constructor(private router:Router) { }
  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.courses = userData.courses || [];
    this.name = userData.userName;
    console.log(this.courses);
    
  }

  studyCourse(){
    this.router.navigate(['/coursedisplay']);
  }
}
