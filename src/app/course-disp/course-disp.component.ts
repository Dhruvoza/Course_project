import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-disp',
  templateUrl: './course-disp.component.html',
  styleUrls: ['./course-disp.component.css']
})
export class CourseDispComponent implements OnInit{
  courses:any = [];
  name:string = '';

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.courses = userData.courses || [];
    this.name = userData.userName;
    console.log(this.courses);
  }
}
