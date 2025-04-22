import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }

  searchCapital( term:string ):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
  }
}
