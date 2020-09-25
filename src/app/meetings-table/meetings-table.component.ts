import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../model/meeting';

@Component({
  selector: 'app-meetings-table',
  templateUrl: './meetings-table.component.html',
  styleUrls: ['./meetings-table.component.css']
})
export class MeetingsTableComponent implements OnInit {
  @Input() title: string;
  @Input() dataSource: Meeting[];

  constructor() { }

  ngOnInit(): void {
  }
}
