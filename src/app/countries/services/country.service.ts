import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-storage.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital:    { term: '', countries: [] },
    byCountry:  { term: '', countries: [] },
    byRegion:     { region: '', countries: [] },
  }


  constructor(private http:HttpClient) {
    console.log('Inicialización de ContriesService');
   }

  private getCountriesRequest ( url: string ): Observable<(Country[])> {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError ( () => of([])),
        // delay ( 2000 ),
      )
  }

  searchCapital( term:string ):Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term:term, countries: countries})
      );
;
  }


  searchCountry ( term: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ term }`;

    return this.getCountriesRequest(url);
  }


  searchRegion ( region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(
        catchError( () => of([])),
      )
  }

  searchContryByAplhaCode ( code : string): Observable<Country | null> {
    return this.http.get<Country[]>(` ${ this.apiUrl }/alpha/${ code }`)
    .pipe (
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null))
    );
  }





}
