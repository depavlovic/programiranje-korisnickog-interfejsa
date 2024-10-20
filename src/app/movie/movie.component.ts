import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Movie } from './movie.model';
import { MovieListService } from '../movie-list.service';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { MatFormField } from '@angular/material/form-field';
import { ReservationService } from '../reservation.service';




@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,NgFor,RouterLink,FormsModule,MatFormField,NgIf],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  
  movies: Movie[] = [];
  
 

  constructor(private movieListService : MovieListService,private reservationService:ReservationService,private router:Router){
    
  }
  


  
  
  
  
  ngOnInit(): void {
    this.movies = this.movieListService.getMovies();
  }
  reserveMovie(movie: any) {
    this.reservationService.setSelectedMovie(movie);
    this.router.navigate(['/reservations']);
  }

  
  }


