import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor (private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe ( ({id}) => {
        this.countryService.searchContryByAplhaCode( id )
          .subscribe ( country => {
            console.log({ country });
          })

      })

  }



}
