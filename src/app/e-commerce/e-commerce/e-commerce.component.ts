import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {
  private ngUnSubscribe: Subject<void> = new Subject();
  public products: any;
  public isList: boolean;
  public sortedProducts: any;
  public selectedSort: any;
  public sortForm: FormGroup;

  constructor(private dataService: DataService) { 
    this.sortForm = new FormGroup({
      sort: new FormControl('')
    });
    this.products = [];
    this.isList = false;
  }

  ngOnInit(): void {
    this.getCocktails();
    this.sortForm.controls.sort.valueChanges.subscribe(value => {
      if (value === '1') {
        this.products.sort((a: any,b: any) => a.idDrink - b.idDrink);
      } else {
        this.products.sort((a: any,b: any) => b.idDrink - a.idDrink);
      }
    });
  }

  getCocktails(): void {
    this.dataService
      .getCocktails()
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe(
        (resp: any) => {
          this.products = resp.drinks;
        },
        (error) => {
          // this.errorMessage= error;             
        }
      );
  }

  listOrGrid(value: number): void {
    this.isList = value === 0 ? true : false;
  }

  onSort(): void {
    if (this.selectedSort === 0) {
      this.products.sort();
    } else {
      this.products.sort((a: any,b: any) => b.price - a.price);
    }
  }

}
