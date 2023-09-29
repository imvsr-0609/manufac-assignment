import {
	CalculatedWindeObject,
	CategorisedWine,
	WineObject,
} from '../typings/wine';

export const calculateMean = (
	array: WineObject[],
	property: keyof WineObject,
): number => {
	const dataset = array.map((obj) => Number(obj[property]));

	if (dataset.length === 0) {
		return 0; // Return 0 for an empty array
	}

	const sum = dataset.reduce((acc, val) => acc + val, 0);
	const mean = sum / dataset.length;

	return mean;
};

export const calculateMedian = (
	array: WineObject[],
	property: keyof WineObject,
): number => {
	const dataset = array.map((obj) => Number(obj[property]));
	if (dataset.length === 0) {
		return 0; // Return 0 for an empty array
	}

	const sortedArr = [...dataset].sort((a, b) => a - b);
	const middle = Math.floor(sortedArr.length / 2);

	if (sortedArr.length % 2 === 0) {
		// If the array length is even, return the average of the two middle values
		return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
	} else {
		// If the array length is odd, return the middle value
		return sortedArr[middle];
	}
};

export const calculateMode = (
	array: WineObject[],
	property: keyof WineObject,
): number[] => {
	const dataset = array.map((obj) => Number(obj[property]));
	if (dataset.length === 0) return []; // return empty array if param array is empty
	const frequencyMap: { [key: number]: number } = {};
	let maxFrequency = 0;
	let modes: number[] = [];

	// Build a frequency map
	for (const num of dataset) {
		if (frequencyMap[num]) {
			// If the number is already in the frequency map, increment its count
			frequencyMap[num]++;
		} else {
			// If the number is not in the frequency map, initialize its count to 1
			frequencyMap[num] = 1;
		}

		if (frequencyMap[num] > maxFrequency) {
			// If the current number's frequency is higher than the previous maximum frequency,
			// update the maximum frequency and reset the modes array with the current number
			maxFrequency = frequencyMap[num];
			modes = [num];
		} else if (frequencyMap[num] === maxFrequency && !modes.includes(num)) {
			// If the current number's frequency equals the maximum frequency and it's not already in the modes array,
			// add it to the modes array (multiple modes can exist)
			modes.push(num);
		}
	}

	return modes;
};

export const categorizeArrayByProperty = (
	array: WineObject[],
	property: keyof WineObject,
): CategorisedWine => {
	const categorized: CategorisedWine = {}; // initialise an empty object
	for (const obj of array) {
		//loop inside the object
		const value = Number(obj[property]) || 0;
		if (categorized[value]) {
			//if the key already exist push the new value
			categorized[value].push(obj);
		} else {
			//create new key-value pair
			categorized[value] = [obj];
		}
	}
	return categorized;
};

export const categorizeCalculation = (
	categorizedObject: CategorisedWine,
	property: keyof WineObject,
): CalculatedWindeObject[] => {
	const calculated = Object.keys(categorizedObject).map((key) => {
		return {
			class: Number(key),
			mean: calculateMean(categorizedObject[Number(key)], property),
			median: calculateMedian(categorizedObject[Number(key)], property),
			mode: calculateMode(categorizedObject[Number(key)], property),
		};
	});

	return calculated;
};
