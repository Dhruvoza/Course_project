import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Courses } from './courses';
import Swal from 'sweetalert2';
import { CourseService } from './coursecatelog.service';
import { Subscription } from 'rxjs';
import { DropdownService } from './dropdown.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coursecatelog',
  templateUrl: './coursecatelog.component.html',
  styleUrls: ['./coursecatelog.component.css'],
  providers: [DropdownService]
})
export class CoursecatelogComponent {
  @Output() filterClicked = new EventEmitter<string>();
  
  brandName = {};
  goods :Courses[] = [];
  private _searchTxt: string="";
  
  searchedCourses: Courses[] = [];
  header:string = "All courses";
  sub!: Subscription;
  errorMessagge: any;
  public selectedBrand: string | undefined;
  private _dropSearch:string="";
  dropCourses: Courses[] = [];
  allData!: any[];
  filteredData: Courses[] = [];
  selectedCategory: string = '';  
  

  get searchTxt():string{
    return this._searchTxt;
  }

  get dropSearch():string{
    return this._dropSearch;
  }

  set searchTxt(value:string){
    this._searchTxt=value;
    
    this.searchedCourses = this.Searching(value);
    
  }

  set dropTxt(value:string){
    this._dropSearch=value;
    this.dropCourses = this.dropFilter(value);
  }



  course: Courses[] = [];

  constructor(private _corService: CourseService, private dropdownService: DropdownService, private router: Router) {

  }

  ngOnInit(): void{   

    this.sub = this._corService.getCourse().subscribe({
      next:course => {
        this.course = course;
        this.searchedCourses = this.course;
      },
      error:err => this.errorMessagge = err
    })
    
  }

  dropFilter(filterBy:string):Courses[]{
    filterBy = filterBy.toLowerCase();
    return this.course.filter((cour:Courses) =>
    cour.courseCategory.toLowerCase().includes(filterBy));
  }

  filterDropdown(filter: string){
    this.filteredData = this.course;
    this.searchedCourses = this.filteredData;
    this.searchedCourses = this.searchedCourses.filter((course:Courses) => course.courseCategory == filter)
  }
  
  logout(){
    Swal.fire('Success','User Logged Out Successfully','success');
    this.router.navigate(['/login']);
  }

  sortByRatingDecreaseToIncrease(){
    this.searchedCourses.sort((a,b) => {
      return b.courseRating - a.courseRating;
    });
  }
  
  sortByRatingIncreaseToDecrease(){
    this.searchedCourses.sort((a,b) => {
      return a.courseRating - b.courseRating;
    });
  }

  Searching(searchBy:string):Courses[]{
    searchBy = searchBy.toLowerCase();
    return this.course.filter((cour:Courses)=>
    cour.courseHead.toLowerCase().includes(searchBy));
  }
  onRatingClicked(message:string):void{
    this.header = 'Message from star child' + message; 
}
}
