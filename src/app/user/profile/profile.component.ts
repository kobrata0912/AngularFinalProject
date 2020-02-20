import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean = false;
  savedConfigs: Array<Object>;

	passwordRegex = new RegExp('[A-Za-z0-9.-_]{8,}');

	constructor(private router: Router, private authService: AuthService, private notificationServices: NotificationService) {}

	ngOnInit() {}

	submitNewPassword(profileForm: any) {
    const password: string = profileForm.passwords.password;
    this.loading = true;
    this.authService.changePassword(password)
    .then( async () => {
      this.loading = false;
      await this.authService.logout();
      this.notificationServices.handleSuccess('Успешна смяна на паролата. Моля, влезте отново в профила си!');
      this.router.navigate(['login']);
    })
    .catch(error => {
      this.loading = false;
      this.notificationServices.handleError(error);
    });
  }
}
