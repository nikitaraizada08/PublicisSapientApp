import { Component, OnInit } from '@angular/core';
import { SubjectCountdownService } from '../subject-countdown.service';

@Component({
  selector: 'app-subject-start-pause-counter',
  templateUrl: './subject-start-pause-counter.component.html',
  styleUrls: ['./subject-start-pause-counter.component.scss']
})
export class SubjectStartPauseCounterComponent implements OnInit {
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private subjectCounterService: SubjectCountdownService) { }

  ngOnInit(): void {
    this.subjectCounterService.startCount$.subscribe((value) => this.startCount = value);
    this.subjectCounterService.pauseCount$.subscribe((value) => this.pauseCount = value);
  }

}
