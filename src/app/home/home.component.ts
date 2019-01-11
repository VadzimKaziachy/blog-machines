import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private width: number;
  private height: number;
  private left: number;
  private top: number;
  private cars  = [];

  constructor(private dataService: DataServiceService) {
    this.width = 800;
    this.height = 800;
    this.left = (window.screen.width - this.width) / 2;
    this.top = (window.screen.height - this.height) / 2;
  }
  repostGooglePlus() {
    const url_soc: string = 'https://plus.google.com/share?url=' + location.href;
    this.social_window(url_soc);
  }
  repostFacebook() {
    const url_soc: string = 'https://www.facebook.com/sharer/sharer.php?u=' + location.href;
    this.social_window(url_soc);
  }
  repostLinkedIn() {
    const url_soc: string = 'http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(location.href);
    this.social_window(url_soc);
  }
  social_window(url_soc) {
    window.open(url_soc,
      'sharer',
      'height=' + this.height + ',width=' + this.width + ',top=' + this.top + ',left=' + this.left).focus();
  }

  ngOnInit() {
    this.cars = this.dataService.getModelsCar();
  }
}
