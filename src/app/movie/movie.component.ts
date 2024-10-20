import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Movie } from './movie.model';
import { MovieListService } from '../movie-list.service';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { MatFormField } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReservationService } from '../reservation.service';

interface MovieRating {
  excellent: boolean;
  veryGood: boolean;
  good: boolean;
  bad: boolean;
  awful: boolean;
}

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,NgFor,RouterLink,FormsModule,MatFormField,NgIf,CommonModule,MatCheckboxModule],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  localRating: { [key: string]: MovieRating } = {};
  
  


  constructor(private movieListService: MovieListService,private reservationService: ReservationService, private router: Router) {}

  ngOnInit(): void {
    this.movies = this.movieListService.getMovies();
    this.movies.forEach(movie => {
      this.localRating[movie.title] = {
        excellent: false,
        veryGood: false,
        good: false,
        bad: false,
        awful: false,
      };
    });

  }
  

  reserveMovie(movie: Movie) {
    this.router.navigate(['/reservations']);
    this.reservationService.setSelectedMovie(movie);
  }

  submitRating(movie: Movie, rating: MovieRating) {
    const selectedRatings = Object.keys(rating).filter(key => rating[key as keyof MovieRating]);

    if (selectedRatings.length > 0) {
      if (!movie.rating) {
        movie.rating = [];
      }
      movie.rating.push(...selectedRatings);
      //@ts-ignore
      Swal.fire({
        title: 'Success!',
        text: `Rating for "${movie.title}" has been recorded: ${selectedRatings.join(', ')}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } else {
      //@ts-ignore
      Swal.fire({
        title: 'Error!',
        text: `No rating has been selected for "${movie.title}".`,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    rating.excellent = false;
    rating.veryGood = false;
    rating.good = false;
    rating.bad = false;
    rating.awful = false;
  }

    
  }
  

}
