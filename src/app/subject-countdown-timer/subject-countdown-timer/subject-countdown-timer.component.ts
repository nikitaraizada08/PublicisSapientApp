import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SubjectCountdownService } from '@app/subject-countdown-timer/subject-countdown.service';

@Component({
  selector: 'app-subject-countdown-timer',
  templateUrl: './subject-countdown-timer.component.html',
  styleUrls: ['./subject-countdown-timer.component.scss']
})
export class SubjectCountdownTimerComponent implements OnInit, OnDestroy {
  private ngUnSubscribe: Subject<void> = new Subject();
  public timeSet: number = 0;
  public initialTimeSet: number= 0;
  public interval: number = 0;

  constructor(private subjectCountDownService: SubjectCountdownService) { }

  ngOnInit(): void {
    this.subjectCountDownService.getTimeSet()
    .pipe(takeUntil(this.ngUnSubscribe))
    .subscribe((value: number) => this.timeSet = value);
  }

  ngOnDestroy(): void {
    this.ngUnSubscribe.unsubscribe();
  }
}
