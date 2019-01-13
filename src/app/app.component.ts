import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menu = [];
  private cars = [];
  private footer: string;
  private isTypesCar: boolean;
  private isContactUs: boolean;
  myForm: FormGroup;

  constructor(private dataService: DataServiceService) {
    this.menu = this.dataService.getMenu();
    this.cars = this.dataService.getModelsCar();
    this.footer = this.dataService.getTextFooter();
    this.myForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}')
      ])
    });
  }
  submit() {
    console.log('письмо отправленно');
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
