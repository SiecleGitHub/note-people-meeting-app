import { GeolocationService } from './../services/geolocation.service';
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

  constructor(private geolocationService: GeolocationService) {}

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
    this.globalMeeting = meeting;
    meeting.print();
    this.getMeetingLocation();
  }
}
