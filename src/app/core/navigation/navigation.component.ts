import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	get isLogged() { return this.userService.isLogged; }

	constructor(private userService: UserService, private router: Router) {}

	ngOnInit() {}

	logout() {
		this.userService.logout();
		this.router.navigate(['']);
	}
}
