import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ReservationComponent } from './reservation/reservation.component';

export const routes: Routes = [
    {path:'', component:MovieComponent},
    {path:'search', component:SearchComponent},
    {path:'reservations',component:ReservationComponent},
    {path:'**', redirectTo:''}
];
