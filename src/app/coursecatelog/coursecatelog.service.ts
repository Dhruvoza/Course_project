import { Injectable } from "@angular/core";
import { Courses } from "./courses";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, filter, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    private courses = [
        {
            "id": 1,
            "courseHead": "Blockchain",
            "courseText": "Blockchain development refers to building, maintaining, and designing blockchain applications and systems. Overall, it seeks to use the unique features of blockchain technology to solve problems and create opportunities. An example of innovative blockchain development is the smart contract.",
            "courseImg": "assets/images/blockchain.png",
            "courseLink": "/detail",
            "courseRating": 4,
            "courseContent": "Blockchain Detail",
            "courseCategory": "tech"
            
          },
          {
            "id": 2,
            "courseHead": "Cloud Computing",
            "courseText": "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.",
            "courseImg": "assets/images/cloud.jpg",
            "courseLink": "/detail",
            "courseRating": 3,
            "courseContent": "Cloud Computing detail",
            "courseCategory": "tech"
          },
          {
            "id": 3,
            "courseHead": "UI/UX development",
            "courseText": "UX design stands for user experience design, while UI design stands for user interface design. Both are important facets of the custom software development process, and both involve working closely with users to create interfaces that are both effective and easy to use.",
            "courseImg": "assets/images/ui_ux.jpg",
            "courseLink": "/detail",
            "courseRating": 3.5,
            "courseContent":"UI/UX detail",
            "courseCategory": "tech"
          },
          {
            "id": 4,
            "courseHead": "Finance Course",
            "courseText": "Finance is a term broadly describing the study and system of money, investments, and other financial instruments. Finance can be divided broadly into three distinct categories: public finance, corporate finance, and personal finance. More recent subcategories of finance include social finance and behavioral finance.",
            "courseImg": "assets/images/finance.jpg",
            "courseLink": "/detail",
            "courseRating": 3.5,
            "courseContent":"Finance Detail",
            "courseCategory": "finance"
          },
          {
            "id": 5,
            "courseHead": "Management Course",
            "courseText": "It involves an in-depth study of the establishment of businesses or companies and all the functional levels like finance, administration, human resources, production, marketing and sales. Most of the courses provided under this discipline are open to students from all the streams, be it science, arts or commerce.",
            "courseImg": "assets/images/management.jpg",
            "courseLink": "/detail",
            "courseRating": 4.5,
            "courseContent":"Management Detail",
            "courseCategory": "management"
          },
          {
            "id": 6,
            "courseHead": "Backend Course",
            "courseText": "In the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
            "courseImg": "assets/images/backend.png",
            "courseLink": "/detail",
            "courseRating": 3.7,
            "courseContent":"Backend Detail",
            "courseCategory": "tech"
        
          } 
    ]
    private courseUrl = 'api/courses/courses.json'

    constructor(private http: HttpClient) { }   
    
    getData(): Observable<any>{
        return this.http.get<any>(this.courseUrl);
    }

    getCourse(): Observable<Courses[]> {
        return this.http.get<Courses[]>(this.courseUrl).pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError)
        );
    }

    getSingleCourse(id:number): Observable<Courses|undefined>{
        return this.getCourse().pipe(
            map((ccourses:Courses[]) => ccourses.find(m=>m.id === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`
        }
        else {
            errorMessage = `Server code : ${err.status}, error message: ${err.message}`
        }
        console.log(errorMessage)
        return throwError(() => errorMessage);

    }
    getCourseById(courseId: number) {
        return this.courses.find(x => x.id === courseId);
      }

}