import { Component, OnInit } from '@angular/core';
import { Meeting } from '../model/meeting';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor() {}

  ngOnInit(): void {}

  print(): void {
    this.meetings.forEach((meeting) => {
      console.log(
        'FirstName= ' +
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
