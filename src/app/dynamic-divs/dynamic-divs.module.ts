import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicDivsComponent } from './dynamic-divs.component';

@NgModule({
  declarations: [
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DynamicDivsComponent }])
  ]
})
export class DynamicDivsModule { }
