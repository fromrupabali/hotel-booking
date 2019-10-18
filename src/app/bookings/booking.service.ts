import { Injectable } from '@angular/core';

import { Booking } from './bookings.model';

@Injectable({ providedIn: 'root'})
export class BookingService {
    private HotelBookings: Booking[] = [
        {
            id: '1',
            placeId: 'p1',
            placeTitle: 'Green hill',
            guestNumber: 2,
            userId: 'abc'
        }
    ];

    get bookings() {
        return [...this.HotelBookings];
    }
}
