import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
 
  public _buttonstate : boolean;
  @Input() 
    public set buttonstate(val: boolean) {
      this._buttonstate = val;
      this._buttonstate ? this.pauseTimer() : this.startTimer();
    }

  @Input() public timeSet = 0;
  
  public interval: any;

  constructor() {
    this._buttonstate = false;
  }

  ngOnInit(): void {
    this.timeSet > 0 && this.buttonstate === false ? this.startTimer() : '';
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeSet > 0) {
        this.timeSet--;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
