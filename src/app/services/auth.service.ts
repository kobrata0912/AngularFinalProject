import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user: User;
	constructor(public afAuth: AngularFireAuth, public router: Router) {
		this.afAuth.authState.subscribe(user => {
			if (user) {
				this.user = user;
				localStorage.setItem('user', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user', null);
			}
		});
	}

	async login(email: string, password: string) {
		return await this.afAuth.auth.signInWithEmailAndPassword(email, password);
	}

	async register(email: string, password: string, displayName: string) {
		return await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
		.then(async () => await this.login(email, password))
		.then(async () => await this.user.updateProfile({
            displayName: displayName
		  }))
		.then(() => this.user.displayName = displayName);
	}

	// async sendEmailVerification() {
	// 	return await this.afAuth.auth.currentUser.sendEmailVerification();
	// }

	// async sendPasswordResetEmail(passwordResetEmail: string) {
	// 	return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
	// }

	async logout() {
		var result = await this.afAuth.auth.signOut();
		localStorage.removeItem('user');
		return result;
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user !== null;
	}
}
