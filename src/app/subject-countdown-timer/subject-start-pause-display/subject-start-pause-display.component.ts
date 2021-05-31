import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectCountdownService } from '@app/subject-countdown-timer/subject-countdown.service';
import { ClickDetails } from '@app/subject-countdown-timer/subject-counter.interface';

@Component({
  selector: 'app-subject-start-pause-display',
  templateUrl: './subject-start-pause-display.component.html',
  styleUrls: ['./subject-start-pause-display.component.scss']
})
export class SubjectStartPauseDisplayComponent implements OnInit , OnDestroy {
  private subscriptions = new Subscription();
  public clickData : ClickDetails[] = [];

  constructor(private subjectCounterService: SubjectCountdownService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.subjectCounterService.getClickDetails()
      .pipe().subscribe((value: ClickDetails[]) =>this.clickData = value)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
