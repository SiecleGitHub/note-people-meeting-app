import { MeetingsComponent } from './../meetings/meetings.component';
import { GeolocationService } from './../services/geolocation.service';
import { Meeting } from './../model/meeting';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private meetingsComponent: MeetingsComponent,
    // eslint-disable-next-line no-unused-vars
    private geolocationService: GeolocationService
  ) {}

  ngOnInit(): void {}

  getMeetingLocation(): void {
    this.geolocationService.getCurrentPosition().subscribe((position) => {
      console.log(position);
    });
  }

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
    this.meetingsComponent.meetings.push(meeting);
    this.meetingsComponent.print();
  }
}
