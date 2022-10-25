import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndiaComponent } from './components/india/india.component';
import { ElectionsComponent } from './components/elections/elections.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { PuchtaheComponent } from './components/puchtahe/puchtahe.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { WorldComponent } from './components/world/world.component';
import { SportsComponent } from './components/sports/sports.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndiaComponent,
    ElectionsComponent,
    EntertainmentComponent,
    PuchtaheComponent,
    LifestyleComponent,
    TechnologyComponent,
    WorldComponent,
    SportsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
