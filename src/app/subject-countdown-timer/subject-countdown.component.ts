import { Component, OnInit } from '@angular/core';
import { SubjectCountdownService } from '@app/subject-countdown-timer/subject-countdown.service';

@Component({
  selector: 'app-subject-countdown',
  templateUrl: './subject-countdown.component.html',
  styleUrls: ['./subject-countdown.component.scss']
})
export class SubjectCountdownComponent implements OnInit {

  constructor(private subjectCountDownService: SubjectCountdownService) { }

  ngOnInit(): void {
  }

}
