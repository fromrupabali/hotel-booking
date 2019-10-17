import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Offer;
  constructor( private route: ActivatedRoute, private navCtrl: NavController, private offersServices: OffersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.offer = this.offersServices.getOffer(paramMap.get('offerId'));
    });
  }

}
