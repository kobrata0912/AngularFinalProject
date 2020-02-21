import { Component, OnInit } from '@angular/core';
import { Car } from '../../angularmodels/carlist.model';
import { ActivatedRoute } from '@angular/router';
import { CarlistService } from '../../services/carlist.service';

@Component({
	selector: 'app-carlist',
	templateUrl: './carlist.component.html',
	styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {
	modelName: string = this.activatedRoute.snapshot.paramMap.get('modelName');
	car: Car[];

	constructor(
		private activatedRoute: ActivatedRoute,
		private carlistService: CarlistService
	) {}

	loading: boolean = false;

	ngOnInit() {
		this.activatedRoute.params.subscribe(routeParams => {
			this.modelName = routeParams.modelName;
			this.loading = true;
			this.carlistService.getCar(this.modelName).subscribe(data => {
				this.loading = false;
				this.car = data.map(e => {
					return {
						...(e.payload.doc.data() as Car)
					};
				});
			});
		});
	}
}
