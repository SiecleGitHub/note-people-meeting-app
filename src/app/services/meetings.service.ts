import { Injectable } from '@angular/core';
import { Meeting } from '../model/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  meetings: Meeting[] = [];
  myHelloString: string;

  constructor() {
  }

  setHelloString(): void {
    console.log('Entered MeetingsService.setHelloString()');
    this.myHelloString = 'Hello';
    console.log('this.myHelloString= ' + this.myHelloString);
  }

  print(): void {
    console.log('Entered MeetingsService.print()');
    this.meetings.forEach((meeting) => {
      console.log(
        'MeetingsService.print::FirstName= ' +
          meeting.firstName +
          ', ' +
          'LastName= ' +
          meeting.lastName +
          ', ' +
          'Date= ' +
          meeting.date +
          ', ' +
          'Location= ' +
          meeting.location
      );
    });
  }
}
