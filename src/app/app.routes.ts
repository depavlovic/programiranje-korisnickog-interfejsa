import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { RatingsComponent } from './ratings/ratings.component';

export const routes: Routes = [
    {path:'', component:MovieComponent},
    {path:'search', component:SearchComponent},
    {path:'ratings',component:RatingsComponent},
    {path:'**', redirectTo:''}
];
