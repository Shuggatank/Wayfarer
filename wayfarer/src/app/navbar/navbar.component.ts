import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cities: any = [];
  // citiesList: any[] = [this.cities[0].name, 'London', 'Gibraltar','Sydney', 'Seattle'];
  citiesList: any[] = ['San Franciso', 'London', 'Gibraltar','Sydney', 'Seattle'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cities = CITIES.find( (city: { id: number; }) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
  }


  onChange(event: any){
    console.log(event.value);
  }
}
