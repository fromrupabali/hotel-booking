import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffer: Offer[];
  constructor( private offerServices: OffersService) { }

  ngOnInit() {
    this.loadedOffer = this.offerServices.allOffer;
    console.log(this.loadedOffer);
  }

}
