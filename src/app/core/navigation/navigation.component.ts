import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	get isLogged() {
		return this.authService.isLoggedIn;
	}

	constructor(
		private authService: AuthService,
		private router: Router,
		private notificationServices: NotificationService
	) {}

	ngOnInit() {}

	logout() {
		this.authService.logout();
		this.notificationServices.handleSuccess('Успешно излизане!');
		this.router.navigate(['home']);
	}
}
