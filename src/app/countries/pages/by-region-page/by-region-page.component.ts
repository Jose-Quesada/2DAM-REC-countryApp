import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: Country[]= [];
  constructor(  private countryService:CountryService){}


  searchByRegion ( term : string ):void{
    this.countryService.searchRegion(term)
      .subscribe( countries =>
        this.countries = countries
      )
  }

}
