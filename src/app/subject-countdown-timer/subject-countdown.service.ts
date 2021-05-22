import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, VirtualTimeScheduler } from 'rxjs';
import { ClickDetails } from './subject-counter.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjectCountdownService {

  timeSet = new BehaviorSubject<number>(0);
  timeSet$ = this.timeSet.asObservable();
  buttonStartPause = new BehaviorSubject<boolean>(false);
  buttonStartPause$ = this.buttonStartPause.asObservable();
  clickDataArray = new BehaviorSubject<ClickDetails[]>([]);
  clickDataArray$ = this.clickDataArray.asObservable();
  startCount = new BehaviorSubject<number>(0);
  startCount$ = this.startCount.asObservable();
  pauseCount = new BehaviorSubject<number>(0);
  pauseCount$ = this.pauseCount.asObservable();

  constructor() {}

  setTimeSet(value: number): void {
    this.timeSet.next(value);
  }

  setButtonState(value: boolean): void {
    this.buttonStartPause.next(value)
  }

  setClickDetails(value: ClickDetails[]): void {
    this.clickDataArray.next(value);
  }

  setStartPauseCount(start: number, pause: number): void {
    this.startCount.next(start);
    this.pauseCount.next(pause);
  }
}
