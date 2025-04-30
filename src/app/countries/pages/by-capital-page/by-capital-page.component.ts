import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  countries: Country[]= [];
  public isLoading: boolean = false;
  constructor(  private countryService:CountryService){}


  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
  }


  searchByCapital ( term : string ):void{
    this.isLoading = true;
    this.countryService.searchCapital(term)
      .subscribe( countries =>{
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
