import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudiComponent } from './audi/audi.component';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';
import { BmwComponent } from './bmw/bmw.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bmw', component: BmwComponent},
  {path: 'audi', component: AudiComponent},
  {path: 'volkswagen', component: VolkswagenComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AudiComponent,
    VolkswagenComponent,
    BmwComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
