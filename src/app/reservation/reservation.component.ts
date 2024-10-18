import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MovieListService } from '../movie-list.service';
import { Reservation } from '../reservation/reservation.model';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  movies: Movie[] = [];
  reservations: Reservation[] = [];
  quantity: number = 1;
  selectedMovie: Movie | null = null;

  constructor(private movieListService: MovieListService) {}

  ngOnInit(): void {
    this.movies = this.movieListService.getMovies();
  }

  addToCart(movie: Movie | null, quantity: number) {
    if (!movie) return;

    const existingReservation = this.reservations.find(reservation => reservation.movieTitle === movie.title);

    if (existingReservation) {
      existingReservation.quantity += quantity; // Ako je film već u korpi, povećajte broj karata
    } else {
      this.reservations.push({
        movieTitle: movie.title,
        genre: movie.genre,
        actors: movie.cast,
        duration: movie.duration,
        ticketPrice: movie.ticketPrice,
        quantity: quantity
      });
    }

    console.log('Trenutne rezervacije:', this.reservations);
  }

  removeFromCart(movieTitle: string) {
    this.reservations = this.reservations.filter(reservation => reservation.movieTitle !== movieTitle);
  }

  clearCart() {
    this.reservations = [];
  }
}

