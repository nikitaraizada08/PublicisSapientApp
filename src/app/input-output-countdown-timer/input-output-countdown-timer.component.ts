import { Component, OnInit } from '@angular/core';
import { ClickDetails } from '@app/subject-countdown-timer/subject-counter.interface';

@Component({
  selector: 'app-input-output-countdown-timer',
  templateUrl: './input-output-countdown-timer.component.html',
  styleUrls: ['./input-output-countdown-timer.component.scss']
})
export class InputOutputCountdownTimerComponent implements OnInit {
  public timeSet: number = 0;
  public buttonstate: boolean = false;
  public clickData: ClickDetails[] = [];
  public startCount: number = 0;
  public pauseCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setTimer(time: number): void {
    this.timeSet = time;
  }

  setButtonState(state: boolean): void {
    this.buttonstate = state;
  }

  setClickDataArray(data: ClickDetails[]): void {
    this.clickData = data;
    this.setCount(data);
  }

  setCount(val: ClickDetails[]): void {
    const startData = val.filter((data:ClickDetails) => data?.state?.includes('Start'));
    this.startCount = startData.length;
    this.pauseCount = val.length - this.startCount;
  }
}
