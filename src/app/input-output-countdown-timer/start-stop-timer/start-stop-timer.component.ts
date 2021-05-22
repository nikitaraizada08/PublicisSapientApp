import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-stop-timer',
  templateUrl: './start-stop-timer.component.html',
  styleUrls: ['./start-stop-timer.component.scss']
})
export class StartStopTimerComponent implements OnInit {

  @Input() clickData: any;

  constructor() { }

  ngOnInit(): void {}

}
