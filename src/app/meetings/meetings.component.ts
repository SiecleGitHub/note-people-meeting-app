import { Component, OnInit } from '@angular/core';
import { Meeting } from '../model/meeting';
import { MeetingsService } from '../services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  meetingsData: Meeting[];
  meetingsTitle: string;

  constructor(private meetingsService: MeetingsService) {
    this.meetingsData = this.meetingsService.meetings;
    this.meetingsTitle = this.meetingsService.title;
  }

  ngOnInit(): void {}
}
