export class Car {
	modelName: string;
	pricelist: {
		priceListUrl: string;
		priceListHeader: string;
		priceListDescription: string;
	};
	dimensions: {
		frontAndBackView: string;
		sideView: string;
		topView: string;
	};
	overview: {
		overviewDescription: string;
		overviewHeader: string;
		description: [
			{
				description: string;
				heading: string;
			}
		];
	};
	extras: {
		extrasDescription: string;
		extrasHeader: string;
		description: [
			{
				description: string;
				heading: string;
			}
		];
	};
	interior: {
		interiorDescription: string;
		interiorHeader: string;
		description: [
			{
				description: string;
				heading: string;
			}
		];
	};
	technicalData: {
		technicalDataDescription: string;
		technicalDataHeader: string;
		description: [
			{
				description: string;
				heading: string;
			}
		];
	};
	pictures: [
		string
	]
}
