import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectCountdownComponent } from './subject-countdown.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectCountdownComponent,
    children: [
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectCountDownRoutingModule { }
