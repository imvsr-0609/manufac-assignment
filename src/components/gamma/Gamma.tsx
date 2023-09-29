import { FC } from 'react';
import wineData from '../../constants/Wine-Data.json';
import {
	categorizeArrayByProperty,
	categorizeCalculation,
} from '../../utils/helper';
import TableComponent from '../table/TableComponent';

const Gamma: FC = () => {
	const gammaWineData = wineData.map((wine) => ({
		...wine,
		Gamma: Number(
			((Number(wine['Ash']) * wine['Hue']) / wine['Magnesium']).toFixed(3),
		),
	}));
	const gammaData = categorizeCalculation(
		categorizeArrayByProperty(gammaWineData, 'Alcohol'),
		'Gamma',
	);

	return (
		<div>
			<h1>Gamma</h1>
			<TableComponent data={gammaData} />
		</div>
	);
};

export default Gamma;
