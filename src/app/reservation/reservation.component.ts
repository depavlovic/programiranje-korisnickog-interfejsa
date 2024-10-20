import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgIf } from '@angular/common';
import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatSelectModule,NgIf],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  movie: Movie | null;
  ticketCount: number;

  constructor(private reservationService: ReservationService) {
    this.movie = this.reservationService.getSelectedMovie();
    this.ticketCount = this.reservationService.getTicketCount();
  }
  ngOnInit(): void {
    throw new Error('Reserve is failed');
  }

  getTotalPrice() {
    return this.reservationService.getTotalPrice();
  }

  confirmReservation() {
    alert(`Film "${this.movie?.title}" successfully reserved! Total price: ${this.getTotalPrice()} RSD`);
  }

  updateTicketCount(count: number) {
    this.ticketCount = count;
    this.reservationService.setTicketCount(count);
  }
}

