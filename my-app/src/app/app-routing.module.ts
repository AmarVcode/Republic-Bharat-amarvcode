import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectionsComponent } from './components/elections/elections.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { IndiaComponent } from './components/india/india.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { PuchtaheComponent } from './components/puchtahe/puchtahe.component';
import { SearchComponent } from './components/search/search.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { WorldComponent } from './components/world/world.component';

const routes: Routes = [
  {path: '', component:IndiaComponent},
  {path: 'elections', component:ElectionsComponent},
  {path: 'entertainment', component:EntertainmentComponent},
  {path: 'puchtahe', component:PuchtaheComponent},
  {path: 'lifestyle', component:LifestyleComponent},
  {path: 'technology', component:TechnologyComponent},
  {path: 'world', component:WorldComponent},
  {path: 'sports', component:SportsComponent},
  {path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
