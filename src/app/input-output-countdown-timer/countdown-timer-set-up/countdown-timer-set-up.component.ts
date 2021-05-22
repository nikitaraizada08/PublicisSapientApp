import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countdown-timer-set-up',
  templateUrl: './countdown-timer-set-up.component.html',
  styleUrls: ['./countdown-timer-set-up.component.scss']
})
export class CountdownTimerSetUpComponent implements OnInit {
  public timer: FormGroup;
  public buttonState: boolean;
  public count = 0;
  public buttonText: string;
  public clickData: any;
  @Output() timeSet = new EventEmitter<number>();
  @Output() buttonStartPause = new EventEmitter<boolean>();
  @Output() clickDataArray = new EventEmitter<any>();

  constructor() {
    this.buttonState = false;
    this.clickData = []
    this.buttonText = 'Start';
    this.timer = new FormGroup({
      time: new FormControl(0, Validators.required)
    });
   }

  ngOnInit(): void {}

  timerStartPause(): void {
    this.count = this.count < 1 ? this.count + 1 : 0;
    this.buttonState = this.count === 0 ;
    this.buttonText = this.buttonState ? 'Start' : 'Pause';
    this.buttonStartPause.emit(this.buttonState);
    this.timeSet.emit(this.timer.value['time']);
    this.setDateTime();
  }

  setDateTime(): void {
    const clickDetails = {
      state : this.buttonState ? 'Pause': 'Start',
      time: new Date()
    }
    this.clickData.push(clickDetails);
    this.clickDataArray.emit(this.clickData);
  }

  resetTimer(): void {
    this.timer.reset();
    this.buttonState = false;
    this.buttonText = 'Start'
    this.buttonStartPause.emit(this.buttonState);
    this.timeSet.emit(0);
    this.clickData = [];
    this.clickDataArray.emit(this.clickData);
  }

}
