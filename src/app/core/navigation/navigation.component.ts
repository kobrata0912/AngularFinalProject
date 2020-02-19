import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { CarlistService } from '../../services/carlist.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	carModels: Array<string>;

	get isLogged() {
		return this.authService.isLoggedIn;
	}

	constructor(
		private authService: AuthService,
		private router: Router,
		private notificationServices: NotificationService,
		private carModelsService: CarlistService
	) {}

	ngOnInit() {
		this.carModelsService.getCarModels().subscribe(data => {
			this.carModels = data.map(e => {
				return e.payload.doc.get('modelName');
			})
		})
	}

	logout() {
		this.authService.logout();
		this.notificationServices.handleSuccess('Успешно излизане!');
		this.router.navigate(['home']);
	}
}
