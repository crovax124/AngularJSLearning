import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}

  getBookings(): Booking[] {
    return Bookings;
  }

  getBookingById(id: number): Booking {
    var bookingById = Bookings.find((booking) => booking.id == id)!;
    return bookingById;
  }

  deleteBooking(booking: Booking): void {
    var bookingIndex = Bookings.indexOf(booking);
    Bookings.splice(bookingIndex, 1);
  }

  pushBooking(booking: Booking): void {
    Bookings.push(booking);
  }

  updateBooking(booking: Booking): void {
    var currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
