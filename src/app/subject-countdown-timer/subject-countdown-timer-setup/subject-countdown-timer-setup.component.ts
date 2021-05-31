import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectCountdownService } from '@app/subject-countdown-timer/subject-countdown.service';
import { ClickDetails } from '@app/subject-countdown-timer/subject-counter.interface';

@Component({
  selector: 'app-subject-countdown-timer-setup',
  templateUrl: './subject-countdown-timer-setup.component.html',
  styleUrls: ['./subject-countdown-timer-setup.component.scss']
})
export class SubjectCountdownTimerSetupComponent implements OnInit {
  public timer: FormGroup;
  public buttonState: boolean;
  public count = 0;
  public buttonText: string;
  public time: number = 0;
  public clickData: ClickDetails[];
  public interval: any;
  public timeSet: number = 0;

  constructor(private subjectCountdownService: SubjectCountdownService) {
    this.buttonState = false;
    this.clickData = [];
    this.buttonText = 'Start';
    this.timer = new FormGroup({
      time: new FormControl(0, Validators.required)
    });
   }

  ngOnInit(): void {
  }

  timerStartPause(): void {
    this.count = this.count < 1 ? this.count + 1 : 0;
    this.buttonState = this.count === 0 ;
    this.buttonText = this.buttonState ? 'Start' : 'Pause';
    this.timeSet = this.clickData.length === 0 ? this.timer.value['time'] : this.timeSet;
    this.buttonState ? this.pauseTimer() :this.startTimer();
    this.subjectCountdownService.setButtonState(this.buttonState);
    this.setDateTime();
    this.setCount();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeSet > 0) {
        this.timeSet--;
        this.subjectCountdownService.setTimeSet(this.timeSet);
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  setDateTime(): void {
    const clickDetails: ClickDetails = {
      state : this.buttonState ? 'Pause': 'Start',
      time: new Date()
    }
    this.clickData.push(clickDetails);
    this.subjectCountdownService.setClickDetails(this.clickData);
  }

  resetTimer(): void {
    this.timer.reset();
    this.buttonState = false;
    this.buttonText ='Start';
    this.clickData = [];
    this.timeSet = 0;
    this.subjectCountdownService.setButtonState(this.buttonState);
    this.subjectCountdownService.setTimeSet(this.timeSet);
    this.subjectCountdownService.setClickDetails(this.clickData);
    this.subjectCountdownService.setStartPauseCount(0, 0);
  }

  setCount(): void {
    const startData = this.clickData.filter((data:ClickDetails) => data?.state?.includes('Start'));
    const startCount = startData.length;
    const pauseCount = this.clickData.length - startCount;
    this.subjectCountdownService.setStartPauseCount(startCount, pauseCount);
  }

}
