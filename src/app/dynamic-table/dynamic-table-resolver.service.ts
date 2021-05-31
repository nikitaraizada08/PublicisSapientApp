import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DynamicTableService } from './dynamic-table.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableResolverService {

  constructor(
    private dynamicTableService: DynamicTableService
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dynamicTableService.getTableData();
  }
}
