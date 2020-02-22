import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

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
		path: 'user',
		loadChildren: () => import('./user/user.module').then(m => m.UserModule)
	},
	{
		path: 'news',
		loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
	},
	{
		path: 'configurator',
		pathMatch: 'full',
		canActivate: [AuthGuard],
		data: {
			isLogged: true
		},
		loadChildren: () => import('./configurator/configurator.module').then(m => m.ConfiguratorModule)
	},
	{
		path: 'repairs',
		pathMatch: 'full',
		canActivate: [AuthGuard],
		data: {
			isLogged: true
		},
		loadChildren: () => import('./repairs/repairs.module').then(m => m.RepairsModule)
	},
	{
		path: 'models',
		loadChildren: () => import('./carmodels/carmodels.module').then(m => m.CarmodelsModule)
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
