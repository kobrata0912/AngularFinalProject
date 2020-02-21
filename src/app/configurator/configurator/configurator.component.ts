import { Component, OnInit } from '@angular/core';
import {
	CurrentConfiguration,
	Configuration
} from '../../angularmodels/configurator.model';
import { ConfiguratorService } from '../../services/configurator.service';

@Component({
	selector: 'app-configurator',
	templateUrl: './configurator.component.html',
	styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {
	currentConfiguration: CurrentConfiguration;
	configurator: Configuration[];
  loading: boolean = false;

	constructor(private configuratorService: ConfiguratorService) {}

	ngOnInit() {
		this.loading = true;
		this.configuratorService.getAvailableConfigurations().subscribe(data => {
			this.loading = false;
			this.configurator = data.map(e => {
				return {
					...(e.payload.doc.data() as Configuration)
				};
			});
		});
	}
}
