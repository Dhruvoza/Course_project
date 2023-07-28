import { Component, OnInit } from '@angular/core';
import { Courses } from '../coursecatelog/courses';
import { CourseService } from '../coursecatelog/coursecatelog.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  course!: Courses; 
  constructor(private router: Router, private courseService: CourseService, private route: ActivatedRoute) { } 

  reviews: { username: string, reviewText: string, rating: number }[] = [];
  newReview = { username: '', reviewText: '', rating: 0 };

  addReview() {
    if (this.newReview.username && this.newReview.reviewText && this.newReview.rating > 0) {
      this.reviews.push({ ...this.newReview });
      this.newReview.username = '';
      this.newReview.reviewText = '';
      this.newReview.rating = 0;
    }
  }

  setRating(review: any, rating: number) {
    review.rating = rating;
  }

  hoverRating(review: any, rating: number) {
    if (this.newReview === review) {
      this.newReview.rating = rating;
    }
  }

  clearHoverRating(review: any) {
    if (this.newReview === review) {
      if (this.newReview.rating === review.rating) {
        this.newReview.rating = 0;
      }
    }
  }
  
}
