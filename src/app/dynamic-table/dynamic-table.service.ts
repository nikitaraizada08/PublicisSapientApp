import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentsData } from './table.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {
  jsonPath: string = './assets/table.json';
  constructor(private httpClient: HttpClient) { }

  public getTableData() {
    return this.httpClient.get<StudentsData[]>(this.jsonPath)
  }
}
