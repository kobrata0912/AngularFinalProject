import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
	loading: boolean = false;
	namesRegex = new RegExp("[А-Яа-яA-Za-z\-\']{2,}");
	emailRegex = new RegExp('[a-zA-Z0-9\.\-\_]{3,}@gmail.com');
	passwordRegex = new RegExp('[A-Za-z0-9\.\-\_]{8,}');

	constructor(
		private authService: AuthService,
		private router: Router,
		private notificationServices: NotificationService
	) {}

	ngOnInit() {}

	handleRegister({
		firstName,
		lastName,
		email,
		passwords
	}: {
		firstName: string;
		lastName: string;
		email: string;
		passwords: {
			password: string;
			rePassword: string;
		};
	}) {
		const displayName: string = `${firstName} ${lastName}`;
		this.loading = true;
		this.authService
			.register(email, passwords.password, displayName)
			.then(() => {
				this.loading = false;
				this.notificationServices.handleSuccess('Успешна регистрация!');
				this.router.navigate(['home']);
			})
			.catch(error => {
				this.loading = false;
				this.notificationServices.handleError(error);
			});
	}
}
