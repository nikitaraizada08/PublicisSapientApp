import { Component, OnInit } from '@angular/core';
import { SubjectCountdownService } from '../subject-countdown.service';
import { ClickDetails } from '../subject-counter.interface';

@Component({
  selector: 'app-subject-start-pause-display',
  templateUrl: './subject-start-pause-display.component.html',
  styleUrls: ['./subject-start-pause-display.component.scss']
})
export class SubjectStartPauseDisplayComponent implements OnInit {
  public clickData : ClickDetails[] = [];

  constructor(private subjectCounterService: SubjectCountdownService) { }

  ngOnInit(): void {
    this.subjectCounterService.clickDataArray$.subscribe((value) => this.clickData = value)
  }

}
