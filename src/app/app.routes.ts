import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    {path:'', component:MovieComponent},
    {path:'search', component:SearchComponent},
    {path:'reservations',component:ReservationComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
    {path:'**', redirectTo:''}
];
