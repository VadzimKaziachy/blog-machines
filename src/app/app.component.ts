import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menu = [];
  private cars = [];
  private footer: string;
  private email: string;
  private isTypesCar: boolean;
  private isContactUs: boolean;

  constructor(private dataService: DataServiceService) {
    this.menu = this.dataService.getMenu();
    this.cars = this.dataService.getModelsCar();
    this.footer = this.dataService.getTextFooter();
  }
  validator() {
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.email)) {
      console.log('письмо отправленно');
      this.email = '';
    } else {
      console.log('письмо не отправленно');
      this.email = 'error';
    }
  }
  extraMenu(value) {
    if (value === 'cars' && !this.isContactUs) {
      this.isTypesCar = !this.isTypesCar;
    }
    if (value === 'contact' && !this.isTypesCar) {
      this.isContactUs = !this.isContactUs;
    }
  }
}
