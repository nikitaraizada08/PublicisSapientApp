import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { table } from './table.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {
  jsonPath: string = './assets/table.json';
  constructor(private httpClient: HttpClient) { }

  getTableData() {
    return this.httpClient.get<table[]>(this.jsonPath)
  }
}
