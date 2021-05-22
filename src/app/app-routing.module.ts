import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/floatingbanner', pathMatch: 'full' },
  {
    path: 'floatingbanner',
    loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule)
  },
  {
    path: 'dynamic-table',
    loadChildren: () => import('./dynamic-table/dynamic-table.module').then(m => m.DynamicTableModule)
  },
  {
    path: 'io-countdown',
    loadChildren: () => import('./input-output-countdown-timer/input-output-countdown-timer.module').then(m => m.InputOutputCountdownTimerModule)
  },
  {
    path: 'subject-countdown',
    loadChildren: () => import('./subject-countdown-timer/subject-countdown.module').then(m => m.SubjectCountDownModule)
  },
  {
    path: 'dynamic-divs', 
    loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
