import { Injectable } from '@angular/core';
import { Movie } from './movie/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private selectedMovie: Movie | null = null;
  private ticketCount: number = 1;

  setSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  getSelectedMovie(): Movie | null {
    return this.selectedMovie;
  }

  setTicketCount(count: number) {
    this.ticketCount = count;
  }

  getTicketCount(): number {
    return this.ticketCount;
  }

  getTotalPrice(): number {
    return this.selectedMovie ? this.selectedMovie.ticketPrice * this.ticketCount : 0;
  }
}
