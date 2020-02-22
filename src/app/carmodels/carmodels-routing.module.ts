import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarlistComponent } from './carlist/carlist.component';


const routes: Routes = [
	{
		path: ':modelName',
        component: CarlistComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CarmodelsRoutingModule {}
