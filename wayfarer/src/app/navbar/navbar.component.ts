import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CITIES } from '../cities'
import { CitiesService } from '../cities/cities.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  cities: any = {};
  citiesList: string[] = []; // This array populates the names of the cities in the dropdown list
  constructor(private route: ActivatedRoute, private router: Router, private el:ElementRef) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cities = CITIES.find( (city: { id: number; }) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
    // Gets the city names for the menu and stores them in an string array
    CITIES.forEach(city => {
      this.citiesList.push(city.name);
    })
  }


  onChange(event: any){
    this.router.navigate(['cities/',event.value]);
    this.el.nativeElement.querySelector('span.mat-select-min-line').innerText = this.citiesList[event.value-1]; // This part sets the text in the dropdown menu to the city selected
  }

  resetForm(){
  //  console.log(this.el.nativeElement.querySelector('span.mat-select-min-line').innerText);
   this.el.nativeElement.querySelector('span.mat-select-min-line').innerText = "";//this clears the text in the dropdown menu
  }
}
