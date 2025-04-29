import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  countries: Country[]= [];
    constructor(  private countryService:CountryService

    ){}


    searchByCountry ( term : string ):void{
      this.countryService.searchCountry(term)
        .subscribe( countries =>
          this.countries = countries
        )
    }

}
