import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }

  searchCapital( term:string ):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError( () => of([])),
      )
  }


  searchCountry ( term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        catchError( () => of([])),
      )
  }


  searchRegion ( region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(
        catchError( () => of([])),
      )
  }

  searchContryByAplhaCode ( code : string): Observable<Country[]> {
    return this.http.get<Country[]>(` ${ this.apiUrl }/alpha/${ code }`)
    .pipe (
      catchError( () => of([]))
    );
  }


}
