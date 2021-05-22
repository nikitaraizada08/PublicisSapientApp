import { Component, OnInit } from '@angular/core';
import { SubjectCountdownService } from '../subject-countdown.service';

@Component({
  selector: 'app-subject-countdown-timer',
  templateUrl: './subject-countdown-timer.component.html',
  styleUrls: ['./subject-countdown-timer.component.scss']
})
export class SubjectCountdownTimerComponent implements OnInit {
  public timeSet: number = 0;
  public initialTimeSet: number= 0;
  public interval: any;

  constructor(private subjectCountDownService: SubjectCountdownService) { }

  ngOnInit(): void {
    this.subjectCountDownService.timeSet$.subscribe((value: number) => this.timeSet = value);
  }
}
