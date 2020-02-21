export class Configuration {
	modelName: string;
	mainPicture: string;
	fuelType: Array<string>;
	transmission: Array<string>;
	petrolEngines: Array<{
		engineCo2: string;
		engineConsumption: string;
		engineName: string;
		enginePower: string;
		engineTransmission: string;
		basePrice: number;
	}>;
	dieselEngines: Array<{
		engineCo2: string;
		engineConsumption: string;
		engineName: string;
		enginePower: string;
		engineTransmission: string;
		basePrice: number;
	}>;
	colors: Array<{
		colorName: string;
		price: number;
		pictures: {
			sportRims: Array<string>;
			standardRims: Array<string>;
		}
	}>
	rims: Array<{
		rimsName: string;
		price: number;
	}>
	extras: Array<{
		extraName: string;
		extraPrice: number;
	}>
}

export class CurrentConfiguration {
	creator: string;
	modelName: string;
	fuelType: string;
	transmission: string;
	engine: {
		engineCo2: string;
		engineConsumption: string;
		engineName: string;
		enginePower: string;
		engineTransmission: string;
	}
	color: {
		colorName: string;
		pictures: Array<string>;
	}
	rims: string;
	extras: Array<string>;

}