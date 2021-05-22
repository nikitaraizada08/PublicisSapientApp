import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';

@NgModule({
  declarations: [FloatingBannerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FloatingBannerComponent }])
  ]
})
export class FloatingBannerModule { }
