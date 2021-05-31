import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClickDetails } from '@app/subject-countdown-timer/subject-counter.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjectCountdownService {

  private timeSet = new BehaviorSubject<number>(0);
  private buttonStartPause = new BehaviorSubject<boolean>(false);
  private clickDataArray = new BehaviorSubject<ClickDetails[]>([]);
  private startCount = new BehaviorSubject<number>(0);
  private pauseCount = new BehaviorSubject<number>(0);

  constructor() {}

  setTimeSet(value: number): void {
    this.timeSet.next(value);
  }

  getTimeSet(): Observable<number> {
    return this.timeSet.asObservable();
  }

  setButtonState(value: boolean): void {
    this.buttonStartPause.next(value)
  }

  getButtonState(): Observable<boolean> {
    return this.buttonStartPause.asObservable();
  }

  setClickDetails(value: ClickDetails[]): void {
    this.clickDataArray.next(value);
  }

  getClickDetails(): Observable<ClickDetails[]> {
    return this.clickDataArray.asObservable();
  }

  setStartPauseCount(start: number, pause: number): void {
    this.startCount.next(start);
    this.pauseCount.next(pause);
  }

  getStartCount(): Observable<number> {
    return this.startCount.asObservable();
  }

  getPauseCount(): Observable<number> {
    return this.pauseCount.asObservable();
  }
}
