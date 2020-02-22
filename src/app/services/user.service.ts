import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Repair } from '../angularmodels/repairs.model';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(
		private firestore: AngularFirestore,
		private authService: AuthService
	) {}
	userEmail: string;

	getRepairs() {
    this.userEmail = this.authService.user.email;
		return this.firestore
			.collection('repairs', ref => ref.where('email', '==', this.userEmail))
			.snapshotChanges();
	}
}
