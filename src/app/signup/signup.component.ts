import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName:string="";
  userEmail:string="";
  userPassword:string="";

  constructor(private router:Router) { }

  Alert(){
    alert('Success');
  }

  NotAlert(){
    alert('Fill the fields')
  }

  onSubmit(){
    const userData = {userName:this.userName,userEmail:this.userEmail,password:this.userPassword};
    if(userData.userName == '' || userData.password == ''){
      this.NotAlert
      this.router.navigate(['/signup'])
    }
    else{
    console.log(userData);
    localStorage.setItem('userData',JSON.stringify(userData));
    this.Alert();
    this.router.navigate(['/login']);
    }
  }
}
