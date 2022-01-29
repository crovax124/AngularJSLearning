import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor() {}

  booking: Booking = {
    id: 100,
    name: 'Your name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  ngOnInit(): void {}
}
