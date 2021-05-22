import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  public studentsData : any;
  public headers: string[] = [];
  public count: number= 0;
  public details: any;
  public sortedDetails: any;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.count = 0
    this.route.data.subscribe((data: Data) => this.studentsData = data['dynamicTable']);
    this.details = [...this.studentsData];
    this.sortedDetails = [...this.details];
    this.headers = Object.keys(this.studentsData[0]);
    console.log(this.headers);
  }

  sort(header: string, index: number) : void {
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

}
