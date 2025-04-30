import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: Country[]= [];
  public regions: Region[]= ["Africa" , 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  public selectedRegion?: Region;

  constructor(  private countryService:CountryService){}


  searchByRegion ( region : Region ):void{

    this.selectedRegion = region;

    this.countryService.searchRegion(region)
      .subscribe( countries =>
        this.countries = countries
      )
  }

}
