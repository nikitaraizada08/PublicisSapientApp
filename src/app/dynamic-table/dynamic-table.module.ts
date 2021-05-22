import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table.component';
import { DynamicTableResolverService } from './dynamic-table-resolver.service';

@NgModule({
  declarations: [
    DynamicTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DynamicTableComponent, resolve: { dynamicTable: DynamicTableResolverService } }])
  ]
})
export class DynamicTableModule { }
