import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Repair } from '../angularmodels/repairs.model'

@Injectable({
  providedIn: 'root'
})
export class RepairsService {


  constructor(private firestore: AngularFirestore) { }

  createRepair(repair: Repair) {
		return this.firestore.collection('repairs').add(repair);
  }
  
}
