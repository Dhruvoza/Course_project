import { Component, OnInit } from '@angular/core';
import { Courses } from '../coursecatelog/courses';
import { CourseService } from '../coursecatelog/coursecatelog.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: any;
  enrollflag: boolean = false;
  enroll: string = 'Enroll';

  constructor(private router: Router, private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id &&
      this.courseService.getCourse().subscribe(courses => {
        this.course = courses.filter(course => course.id === +id).at(0);
      })

    console.log(this.course)
    this.invokeStripe();
  }

  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51NXdakSAqi6ZKvm40OYZo40zhvJoFkJaUzQ6pz67hTlbaF8L9y6HEEm4dZJhZ2MRnqDZeQdFG78sgkaawOzYZGOU00pnRVJoFC';

  handleEnroll() {
    // console.log(this.course);


    // Retrieve existing user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData.userName) {
      this.router.navigate(['login']);
    }
    // let userData = JSON.parse(localStorage.getItem('userData') || '{}');

    // Check if 'courses' property exists in userData and is present then id is already enrolled else not
    if (!userData.hasOwnProperty('courses')) {
      // If 'courses' property doesn't exist, create it as a new array with the current course
      userData['courses'] = [this.course];
    }
    else {
      // If 'courses' property exists, push the current course to the existing array
      const courses: any[] = userData['courses'];
      const index = courses.find(p => p.id === this.course.id);
      if (index) {
        Swal.fire('Course Already Enrolled', 'error');
        return;
      }
      userData['courses'].push(this.course);
    }

    // Save the updated user data back to local storage
    // localStorage.setItem('userData', JSON.stringify(userData));

    //changing the color of enroll button
    this.enrollflag = !this.enrollflag;
    this.enroll = 'Enrolled';
  }


  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);

      },

    });
    this.router.navigate(['user'])
    paymentHandler.open({
      name: 'ItSolutionStuff.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');

          },
        });
      };

      window.document.body.appendChild(script);


    }
  }

}

