import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	emailRegex = new RegExp('[a-zA-Z0-9.-_]{6,}@gmail.com');
	passwordRegex = new RegExp('[A-Za-z0-9.-_]{8,}');

	constructor(private userService: UserService, private router: Router, public firebaseService: FirebaseService) {}

	ngOnInit() {}

	handleLogin({ email, password }: { email: string; password: string }) {
		this.userService.login(email, password);
		this.router.navigate(['']);
	}
}
