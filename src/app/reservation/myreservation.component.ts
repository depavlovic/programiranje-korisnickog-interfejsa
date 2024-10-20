import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  reservations: { title: string; ticketCount: number }[];

  constructor(private reservationService: ReservationService) {
    this.reservations = this.reservationService.getReservations();
  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations(); // Fetch reservations on init
  }

  clearReservations() {
    this.reservationService.clearReservations();
    this.reservations = []; // Clear local array as well
  }
}
