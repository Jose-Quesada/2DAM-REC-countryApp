import { Component, Input, input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styles: `
    img{
      width: 25px;
    }
  `
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = []
}
