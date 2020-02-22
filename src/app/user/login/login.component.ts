import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loading: boolean = false;
	emailRegex = new RegExp('[a-zA-Z0-9.-_]{6,}@gmail.com');
	passwordRegex = new RegExp('[A-Za-z0-9.-_]{8,}');

	constructor(
		private authService: AuthService,
		private router: Router,
		private notificationServices: NotificationService
	) {}

	ngOnInit() {}

	handleLogin({ email, password }: { email: string; password: string }) {
		this.loading = true;
		this.authService
			.login(email, password)
			.then(() => {
				this.notificationServices.handleSuccess('Успешно влизане!');
				this.loading = false;
				this.router.navigate(['/home']);
			})
			.catch(error => {
				this.loading = false;
				this.notificationServices.handleError(error);
			});
	}
}
