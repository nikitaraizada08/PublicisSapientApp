import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause-counter',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.scss']
})
export class StartPauseCounterComponent implements OnInit {

  @Input() public startCount: number = 0;
  @Input() public pauseCount: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
