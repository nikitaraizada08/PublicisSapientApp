import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCountdownTimerComponent } from './subject-countdown-timer/subject-countdown-timer.component';
import { SubjectCountdownTimerSetupComponent } from './subject-countdown-timer-setup/subject-countdown-timer-setup.component';
import { SubjectStartPauseCounterComponent } from './subject-start-pause-counter/subject-start-pause-counter.component';
import { SubjectStartPauseDisplayComponent } from './subject-start-pause-display/subject-start-pause-display.component';
import { SubjectCountdownComponent } from './subject-countdown.component';
import { SubjectCountDownRoutingModule } from './subject-countdown-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubjectCountdownTimerComponent,
    SubjectCountdownTimerSetupComponent,
    SubjectStartPauseCounterComponent,
    SubjectStartPauseDisplayComponent,
    SubjectCountdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubjectCountDownRoutingModule
  ]
})
export class SubjectCountDownModule { }
