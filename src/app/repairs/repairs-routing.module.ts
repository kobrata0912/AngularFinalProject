import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepairsComponent } from './repairs/repairs.component';

const routes: Routes = [
	{
		path: '',
		component: RepairsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RepairsRoutingModule {}
