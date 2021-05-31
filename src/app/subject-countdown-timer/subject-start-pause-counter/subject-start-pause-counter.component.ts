import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectCountdownService } from '@app/subject-countdown-timer/subject-countdown.service';

@Component({
  selector: 'app-subject-start-pause-counter',
  templateUrl: './subject-start-pause-counter.component.html',
  styleUrls: ['./subject-start-pause-counter.component.scss']
})
export class SubjectStartPauseCounterComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  public startCount: number = 0;
  public pauseCount: number = 0;
  constructor(private subjectCounterService: SubjectCountdownService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.subjectCounterService.getStartCount()
      .pipe().subscribe((value) =>this.startCount = value)
    );
    this.subscriptions.add(
      this.subjectCounterService.getPauseCount()
      .pipe().subscribe((value) =>this.pauseCount = value)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
