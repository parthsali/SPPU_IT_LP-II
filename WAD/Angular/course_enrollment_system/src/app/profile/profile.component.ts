import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  registrationData: any = {};
  constructor(private dataservice: DataService) { }
  ngOnInit(): void {
    // const data = this.router.snapshot.paramMap.get('data');
    // if (data) {
    //   this.registrationData = JSON.parse(data);
    // }

    this.registrationData = this.dataservice.getRegistrationData();
  }
}
