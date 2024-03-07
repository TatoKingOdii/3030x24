import {Injectable} from '@angular/core';
import {ModalController} from "@ionic/angular/standalone";
import {Loc} from "~challenge/types";
import {
  LocationEditModalComponent
} from "../../views/location/modals/location-edit-modal/location-edit-modal.component";
import {ModalOptions} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async presentLocationModal(location: Loc) {
    return this.openModal({
      component: LocationEditModalComponent,
      componentProps: {
        location: location
      }
    });
  }
  async openModal(options: ModalOptions) {
    const modal = await this.modalCtrl.create(options);
    return modal.present();
  }

  dismissModal() {
    return this.modalCtrl.dismiss();
  }
}
