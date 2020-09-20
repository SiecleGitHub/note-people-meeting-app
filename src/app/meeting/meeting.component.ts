import { Meeting } from './../model/meeting';
import { Component, OnInit } from '@angular/core';
import { global } from '@angular/compiler/src/util';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  globalMeeting = new Meeting();

  constructor() {}

  ngOnInit(): void {}

  save(
    firstName: string,
    lastName: string,
    date: string,
    location: string
  ): void {
    const meeting = new Meeting();
    meeting.firstName = firstName;
    meeting.lastName = lastName;
    meeting.date = date;
    meeting.location = location;
    this.globalMeeting = meeting;
    meeting.print();
  }
}
