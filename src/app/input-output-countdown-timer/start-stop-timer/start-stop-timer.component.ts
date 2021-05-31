import { Component, Input, OnInit } from '@angular/core';
import { ClickDetails } from '@app/subject-countdown-timer/subject-counter.interface';

@Component({
  selector: 'app-start-stop-timer',
  templateUrl: './start-stop-timer.component.html',
  styleUrls: ['./start-stop-timer.component.scss']
})
export class StartStopTimerComponent implements OnInit {

  @Input() clickData: ClickDetails[] = [];

  constructor() { }

  ngOnInit(): void {}

}
