import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CurrentConfiguration } from '../angularmodels/configurator.model'

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  constructor(private firestore: AngularFirestore) { }

  getAvailableConfigurations() {
    return this.firestore.collection('configurator').snapshotChanges();
  }

  saveCurrentConfiguration(currentConfiguration: CurrentConfiguration) {
    return this.firestore.collection('savedConfigurations').add(currentConfiguration);
  }
}
