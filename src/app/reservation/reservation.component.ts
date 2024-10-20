import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgIf } from '@angular/common';
import { ReservationService } from '../reservation.service';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatSelectModule,NgIf,MatInputModule,CommonModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  movie: Movie | null;
  ticketCount: number;
  reservations: { title: string; ticketCount: number }[] = [];

  constructor(private reservationService: ReservationService) {
    this.movie = this.reservationService.getSelectedMovie();
    this.ticketCount = this.reservationService.getTicketCount();
  }
  ngOnInit(): void {
    this.loadReservations();
    this.movie = this.reservationService.getSelectedMovie();
    this.movie = this.reservationService.getSelectedMovie();
    if (!this.movie) {
      console.error('No movie selected'); 
  }


    if (this.ticketCount <= 0) {
      this.ticketCount = 1;
    }

  }

  loadReservations(): void {
    const savedReservations = localStorage.getItem('myReservations');
    if (savedReservations) {
      this.reservations = JSON.parse(savedReservations);
    } else {
      this.reservations = [];
    }
  }

  saveReservations(): void {
    localStorage.setItem('myReservations', JSON.stringify(this.reservations));
  }

  getTotalPrice() {
    return this.reservationService.getTotalPrice();
  }

  confirmReservation() {
    if (this.movie) {
      const reservation = { title: this.movie.title, ticketCount: this.ticketCount };
      this.reservations.push(reservation);
      this.saveReservations();
      //@ts-ignore
      Swal.fire({
        title: 'Reservation Confirmed!',
        text: `Film "${this.movie.title}" successfully reserved! Total price: ${this.getTotalPrice()} RSD`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      //@ts-ignore
      Swal.fire({
        title: 'Error',
        text: 'No movie selected for reservation.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
  

  updateTicketCount(count: number) {
    this.ticketCount = count;
    this.reservationService.setTicketCount(count);
  }
  deleteReservation(index: number) {
    this.reservations.splice(index, 1);
    this.saveReservations();
    //@ts-ignore
    Swal.fire({
      title: 'Reservation Deleted',
      text: 'Your reservation has been successfully deleted.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }
}

