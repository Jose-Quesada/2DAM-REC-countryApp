import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  countries: Country[]= [];
  constructor(  private countryService:CountryService){}


  searchByCapital ( term : string ):void{
    this.countryService.searchCapital(term)
      .subscribe( countries =>
        this.countries = countries
      )
  }

}
