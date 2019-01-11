import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private models_car = [
    {name: 'BMW', url: '/bmw', image: 'assets/bmw/bmw.jpg', label: 'assets/bmw/bmw_label.png'},
    {name: 'Audi', url: '/audi', image: 'assets/audi/audi.jpg', label: 'assets/audi/audi_label.png'},
    {name: 'Volkswagen', url: '/volkswagen', image: 'assets/volkswagen/volkswagen.jpg', label: 'assets/volkswagen/volkswagen_label.png'},
  ];
  private main_menu = [
    {name: 'Cars', path: '', function: 'cars'},
    {name: 'About', path: '/about', function: '#'},
    {name: 'Contact us', path: '/contacts', function: 'contact'},
  ];
  footer_text: string = 'HALOVIETNAM LTD\n' +
    '          66, Dang Van ngu, Dong Da\n' +
    '          Hanoi, Vietnam';
  constructor() { }
  getMenu() {
    return this.main_menu;
  }
  getModelsCar() {
    return this.models_car;
  }
  getTextFooter() {
    return this.footer_text;
  }
}
