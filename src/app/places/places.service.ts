import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place = [
    new Place(
      'p1',
      'Green Hill',
      'In the heart of sylhet',
      'https://www.azayabeachresortgoa.com/images/Azaya.jpg',
       340.99
       ),
    new Place(
      'p1',
      'Green Hill',
      'In the heart of sylhet',
      'https://www.azayabeachresortgoa.com/images/Azaya.jpg',
      340.99
    )
  ];

  get allPlace() {
    return this.places;
  }

  constructor() { }
}
