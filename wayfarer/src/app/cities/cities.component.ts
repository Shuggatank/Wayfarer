import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';
import { CitiesService } from './cities.service';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city: any;
  weather: any;
  // posts: any;

  constructor(private route: ActivatedRoute, private citiesService : CitiesService) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {

      this.citiesService.sendCityId(params.get('id') || '');

      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        this.citiesService.createAPIObservable(city.name, city.code)
        .subscribe(response => {
          console.log(city.name);
          console.log(response);
          this.weather = response;
        })
        return city.id === parseInt(paramId);
      })
    })
  }
}
