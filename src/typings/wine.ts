export type WineObject = {
	[key: string]: string | number;
};

export type CategorisedWine = {
	[key: number]: WineObject[];
};

export type CalculatedWindeObject = {
	class: number;
	mean: number;
	median: number;
	mode: number[];
};
