import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause-counter',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.scss']
})
export class StartPauseCounterComponent implements OnInit {

  @Input() public startCount: number;
  @Input() public pauseCount: number;

  constructor() {
    this.startCount = 0;
    this.pauseCount = 0;
  }

  ngOnInit(): void {}
}
