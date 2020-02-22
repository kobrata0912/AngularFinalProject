import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../../services/repairs.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-repairs',
	templateUrl: './repairs.component.html',
	styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private repairsService: RepairsService,
		private router: Router,
		private notificationServices: NotificationService
	) {}

	loading: boolean = false;
	fullNames: string = this.authService.user.displayName;
	userEmail: string = JSON.parse(localStorage.getItem('user')).email;
	phoneNumberRegex = new RegExp('^[+0-9 ]{10,}$');

	ngOnInit() {}

	submitHandler(inputForm: any) {
    this.loading = true;
		this.repairsService
			.createRepair({
				names: this.fullNames,
				email: this.userEmail,
				phone: inputForm.phoneNumber,
				location: inputForm.location,
				description: inputForm.description
			})
			.then(() => {
				this.loading = false;
				this.notificationServices.handleSuccess(
					'Успешно изпратена заявка за сервиз. Очаквайте обаждане!'
				);
				this.router.navigate(['repairs']);
			})
			.catch(error => {
				this.loading = false;
				this.notificationServices.handleError(error);
			});
	}
}
