import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router, private notificationService: NotificationService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.authService.isLoggedIn === route.data.isLogged) {
        return true;
    }
    this.notificationService.handleError({code: '', message: 'Трябва да сте регистрирани, за да достъпите тази страница!'})
    this.router.navigate(['/user/login']);
    return false;
}
}
