import { Component, OnInit } from '@angular/core';
import { Meeting } from '../model/meeting';
import { MeetingsService } from '../services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[] = [];
  myHelloString: string;

  constructor(private meetingsService: MeetingsService) {
    this.meetings = this.meetingsService.meetings;
    this.myHelloString = this.meetingsService.myHelloString;
  }

  ngOnInit(): void {}
}
