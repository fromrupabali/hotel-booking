import { Injectable } from '@angular/core';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private offers: Offer[] = [
    new Offer(
      'of1',
      'Hotel Gulsan',
      'https://www.azayabeachresortgoa.com/images/Azaya.jpg',
      258.99
    ),
    new Offer(
      'of2',
      'Light night',
      'https://www.azayabeachresortgoa.com/images/Azaya.jpg',
      258.99
    ),
    new Offer(
      'of2',
      'Nice view',
      'https://www.azayabeachresortgoa.com/images/Azaya.jpg',
      258.99
    ),
  ];

  get allOffer() {
    return [...this.offers];
  }
  getOffer(id: string) {
    return { ...this.offers.find(p => p.id === id)};
  }
  constructor() { }
}
