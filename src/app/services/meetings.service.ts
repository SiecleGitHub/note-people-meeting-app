import { Injectable } from '@angular/core';
import { Meeting } from '../model/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  meetings: Meeting[] = [];
  title: string;

  constructor() {
  }

  setTitle(): void {
    this.title = 'List of Meetings';
  }

  print(): void {
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
