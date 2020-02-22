import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { Repair } from 'src/app/angularmodels/repairs.model';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
	loading: boolean = false;
	savedConfigs: Array<Object>;
	repairRequests: Array<Repair>;
	namesRegex = new RegExp("[А-Яа-яA-Za-z-']{2,}");
	passwordRegex = new RegExp('[A-Za-z0-9.-_]{8,}');

	constructor(
		private router: Router,
		private authService: AuthService,
		private notificationServices: NotificationService,
		private userService: UserService
	) {}

	ngAfterViewInit() {
		this.userService.getRepairs().subscribe(data => {
			this.loading = false;
			this.repairRequests = data.map(e => {
				return {
					...(e.payload.doc.data() as Repair)
				};
			});
		});
	}

	submitNewPassword(profileForm: any) {
		const password: string = profileForm.passwords.password;
		this.loading = true;
		this.authService
			.changePassword(password)
			.then(async () => {
				this.loading = false;
				await this.authService.logout();
				this.notificationServices.handleSuccess(
					'Успешна смяна на паролата. Моля, влезте отново в профила си!'
				);
				this.router.navigate(['login']);
			})
			.catch(error => {
				this.loading = false;
				this.notificationServices.handleError(error);
			});
	}

	submitNewNames(namesForm: any) {
		const names: string = namesForm.firstName + ' ' + namesForm.lastName;
		this.loading = true;
		this.authService.user
			.updateProfile({ displayName: names })
			.then(() => {
				this.loading = false;
				this.notificationServices.handleSuccess('Успешна смяна на имената!');
			})
			.catch(error => {
				this.loading = false;
				this.notificationServices.handleError(error);
			});
	}
}
