import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news/news.component';
import { ConfiguratorComponent } from './configurator/configurator/configurator.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepairsComponent } from './repairs/repairs.component';
import { CarlistComponent } from './carmodels/carlist/carlist.component';
import { NgModel } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'home',
		pathMatch: 'full',
		component: HomeComponent
	},
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
		path: 'aboutus',
		pathMatch: 'full',
		component: AboutUsComponent
	},
	{
		path: 'contacts',
		pathMatch: 'full',
		component: ContactsComponent
	},
	{
		path: 'news',
		pathMatch: 'full',
		component: NewsComponent
	},
	{
		path: 'configurator',
		pathMatch: 'full',
		component: ConfiguratorComponent,
		canActivate: [AuthGuard],
		data: {
			isLogged: true
		}
	},
	{
		path: 'profile',
		pathMatch: 'full',
		component: ProfileComponent
	},
	{
		path: 'repairs',
		pathMatch: 'full',
		component: RepairsComponent,
		canActivate: [AuthGuard],
		data: {
			isLogged: true
		}
	},
	{
		path: 'models/:modelName',
		component: CarlistComponent
	},
	{
		path: '*',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
