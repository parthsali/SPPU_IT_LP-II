import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from '../data-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router, private dataService: DataService){};

  onSubmitRegister(registerform:NgForm)
  {
    console.log(registerform.value);
    // this.router.navigate(['/profile' ,{ data: JSON.stringify(registerform.value) }]);
    this.dataService.setRegistrationData(registerform.value);
    this.router.navigate(['/login']);
  }
}
