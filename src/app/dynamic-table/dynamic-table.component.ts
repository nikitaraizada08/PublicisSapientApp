import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsData } from './table.interface';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  public studentsData : StudentsData[] = [];
  public headers: string[] = [];
  public count: number= 0;
  public details: StudentsData[] = [];
  public sortedDetails: StudentsData[] = [];

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.data.subscribe((data: Data) => {
        this.studentsData = data['dynamicTable'],
        this.details = [...this.studentsData];
        this.sortedDetails = [...this.details];
        this.headers = Object.keys(this.studentsData[0]);
      })
    )
  }

  public sort(header: string) : void {
    if (this.count < 2){
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
    switch(this.count) {
      case 0 : {
        this.sortedDetails = this.studentsData;
        break;
      }
      case 1 : {
        this.sortedDetails = this.details.sort((a: any, b: any) => {
          if (typeof a[header] === 'number') {
            return a[header] - b[header]
          } else {
            return a[header].localeCompare(b[header])
          }
        });
        break;
      }
      case 2 : {
        this.sortedDetails = this.details.sort((a: any, b: any) =>
        {
          if (typeof a[header] === 'number') {
            return b[header] - a[header]
          } else {
            return b[header].localeCompare(a[header])
          }
        });
        break;
      }
      default : {
        this.sortedDetails = this.studentsData;
        break;
      }
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
