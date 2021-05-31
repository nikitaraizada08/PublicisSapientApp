import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Drinks } from '@app/e-commerce/e-commerce.interface';

@Injectable({
    providedIn: 'root',
  })
  export class DataService {
    constructor(private http: HttpClient) {}

  /**
   * Get list of alcoholic drinks
   */
  public getCocktails(): Observable<Drinks> {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;
    return this.http.get<Drinks>(url).pipe(
        map(response => response),
        catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error) {
        // client-side error
        errorMessage = `${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
}
}