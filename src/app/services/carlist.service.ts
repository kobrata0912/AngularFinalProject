import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CarlistService{

  id: string;

  constructor(private firestore: AngularFirestore) { }

  getCar (carModel: string) {
		return this.firestore.collection('cars', ref => ref.where('modelName', '==', carModel)).snapshotChanges();
  }

  getCarModels() {
    return this.firestore.collection('cars', ref => ref.orderBy("modelName", "asc")).snapshotChanges();
  }

}
