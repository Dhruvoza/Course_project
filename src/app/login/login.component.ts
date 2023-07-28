import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router){}
  ngOnInit(){}

  Alert() {
    alert('Invalid Credentials');
  }

  onSubmit() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    console.log(userData);
    if (
      userData.userEmail == this.userEmail &&
      userData.password == this.userPassword
    ) {
      this.router.navigate(['/home']);
    } else {
      this.Alert();
      this.router.navigate(['/login']);
    }
  }

}
