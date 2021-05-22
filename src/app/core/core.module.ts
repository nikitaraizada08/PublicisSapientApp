import { NgModule } from '@angular/core';
import { DynamicTableResolverService } from '../dynamic-table/dynamic-table-resolver.service';
import { SubjectCountdownService } from '../subject-countdown-timer/subject-countdown.service';

@NgModule({
  providers: [DynamicTableResolverService]
})
export class CoreModule { }
