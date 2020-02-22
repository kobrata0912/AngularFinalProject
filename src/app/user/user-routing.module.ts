import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
		data: {
			isLogged: false
		}
	},
	{
		path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
		data: {
			isLogged: false
		}
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [AuthGuard],
		data: {
			isLogged: true
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}
