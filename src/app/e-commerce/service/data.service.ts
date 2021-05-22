import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })
  export class DataService {
    constructor(private http: HttpClient) {}

  /**
   * Get list of alcoholic drinks
   */
  getCocktails(): Observable<object> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    .pipe(
      retry(1),
      catchError(this.handleError)
      );
  }

  handleError(error: any) {
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