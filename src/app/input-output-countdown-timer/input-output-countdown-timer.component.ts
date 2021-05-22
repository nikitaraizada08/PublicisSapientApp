import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-countdown-timer',
  templateUrl: './input-output-countdown-timer.component.html',
  styleUrls: ['./input-output-countdown-timer.component.scss']
})
export class InputOutputCountdownTimerComponent implements OnInit {
  public timeSet: number;
  public buttonstate: boolean;
  public clickData: any;
  public startCount: number;
  public pauseCount: number;

  constructor() {
    this.buttonstate = false;
    this.timeSet = 0;
    this.startCount = 0
    this.pauseCount = 0
   }

  ngOnInit(): void {
  }

  setTimer(time: number): void {
    this.timeSet = time;
  }

  setButtonState(state: boolean): void {
    this.buttonstate = state;
  }

  setClickDataArray(data: any): void {
    this.clickData = data;
    this.setCount(data);
  }

  setCount(val: any): void {
    const startData = val.filter((data:any) => data.state.includes('Start'));
    this.startCount = startData.length;
    this.pauseCount = val.length - this.startCount;
  }
}
