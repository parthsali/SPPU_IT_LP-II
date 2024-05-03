import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private registrationData: any = {};
  constructor() { }

  setRegistrationData(data: any) {
    this.registrationData = data;
  }

  getRegistrationData(): any {
    return this.registrationData;
  }
}
