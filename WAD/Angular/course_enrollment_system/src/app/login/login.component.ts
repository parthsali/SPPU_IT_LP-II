import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  registrationData: any = {};
  constructor(private router: Router,private dataservice: DataService) { }
  ngOnInit(): void {
    this.registrationData = this.dataservice.getRegistrationData();
  }
  onSubmitLogin(loginform: NgForm)
  {
    console.log(loginform.value);
    if(this.registrationData.username === loginform.value.username && this.registrationData.password === loginform.value.password)
    {
      alert("Login Successful");
      this.router.navigate(['/profile']);
    }
    else
    {
      alert("Username or Password did not match");
    }
    
  }
}
