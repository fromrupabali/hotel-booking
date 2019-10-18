import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Green Hill',
      'In the heart of sylhet',
      'https://www.azayabeachresortgoa.com/images/Azaya.jpg',
       340.99
       ),
    new Place(
      'p2',
      'Ibis',
      'Royal place',
      'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
      340.99
    ),
    new Place(
      'p3',
      'Hotel Lorense',
      'Super natural view',
      'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
      340.99
    )
  ];

  get allPlace() {
    return this.places;
  }
  getPlace(id: string) {
    return { ...this.places.find(p => p.id === id) };
  }
  constructor() { }
}
