import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  booking: Booking = {
    id: 100,
    name: 'Your name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  ngOnInit(): void {
    if (this.router.url != '/create-booking') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var pickedBooking = this.bookingService.getBookingById(id);
      this.booking = pickedBooking;
    }
  }

  save(): void {
    var pickedBooking = this.bookingService.getBookingById(this.booking.id);

    if (pickedBooking == null || pickedBooking == undefined) {
      this.bookingService.pushBooking(this.booking);
    } else {
      this.bookingService.updateBooking(this.booking);
    }
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean) {
    var value = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(value);
    } else {
      this.booking.endDate = new Date(value);
    }
  }
}
