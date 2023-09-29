import React, { FC } from 'react';
import wineData from '../../constants/Wine-Data.json';
import {
	categorizeArrayByProperty,
	categorizeCalculation,
} from '../../utils/helper';
import TableComponent from '../table/TableComponent';

const Flavanoids: FC = () => {
	const flavanoidData = categorizeCalculation(
		categorizeArrayByProperty(wineData, 'Alcohol'),
		'Flavanoids',
	);

	return (
		<div>
			<h1>Flavanoid</h1>
			<TableComponent data={flavanoidData} property="Flavanoid" />
		</div>
	);
};

export default Flavanoids;
