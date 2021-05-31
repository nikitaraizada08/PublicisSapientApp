import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Drink, Drinks } from '@app/e-commerce/e-commerce.interface';
import { DataService } from '@app/e-commerce/service/data.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  public products: Drink[];
  public isList: boolean;
  public sortedProducts: Drink[] = [];
  public selectedSort: number = 0;
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
    this.subscriptions.add(
      this.sortForm.controls.sort.valueChanges.subscribe(value => {
        if (value === '1') {
          this.products.sort((a: Drink,b: Drink) => a.idDrink.localeCompare(b.idDrink));
        } else {
          this.products.sort((a: Drink,b: Drink) => b.idDrink.localeCompare(a.idDrink));
        }
      })
    )
  }

  private getCocktails(): void {
    this.subscriptions.add(
      this.dataService
      .getCocktails()
      .pipe()
      .subscribe(
        (resp: Drinks) => {
          this.products = resp.drinks;
        },
        (error) => {
         // this.errorMessage= error;             
        }
      )
    )
  }

  public listOrGrid(value: boolean): void {
    this.isList = value;
  }

  public onSort(): void {
    if (this.selectedSort === 0) {
      this.products.sort();
    } else {
      this.products.sort((a: Drink,b: Drink) => b.idDrink.localeCompare(a.idDrink));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
