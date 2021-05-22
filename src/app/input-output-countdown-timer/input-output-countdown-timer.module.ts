import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputCountdownTimerComponent } from './input-output-countdown-timer.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownTimerSetUpComponent } from './countdown-timer-set-up/countdown-timer-set-up.component';
import { StartStopTimerComponent } from './start-stop-timer/start-stop-timer.component';
import { StartPauseCounterComponent } from './start-pause-counter/start-pause-counter.component';
import { InputOutputCountDownTimerRoutingModule } from './input-output-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputOutputCountdownTimerComponent,
    CountdownTimerComponent,
    CountdownTimerSetUpComponent,
    StartStopTimerComponent,
    StartPauseCounterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputOutputCountDownTimerRoutingModule
  ]
})
export class InputOutputCountdownTimerModule { }
