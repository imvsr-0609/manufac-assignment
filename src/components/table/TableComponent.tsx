import React, { FC } from 'react';
import './table.css';
import { CalculatedWindeObject } from '../../typings/wine';

type TableProps = {
	data: CalculatedWindeObject[];
	property: string;
};

const TableComponent: FC<TableProps> = ({ data, property }) => {
	return (
		<div className="flexbox-table">
			<div className="table-row">
				<div className="table-header-cell">Measure</div>
				<div className="table-header-cell">{property} Mean</div>
				<div className="table-header-cell">{property} Median</div>
				<div className="table-header-cell">{property} Mode</div>
			</div>

			{/* Table rows */}
			{data.map((item, index) => (
				<div className="table-row" key={index}>
					<div className="table-header-cell">Class {item.class}</div>
					<div className="table-cell">{item.mean.toFixed(3)}</div>
					<div className="table-cell">{item.median.toFixed(3)}</div>
					<div className="table-cell">
						{item.mode
							.slice(0, 3)
							.map((val) => val.toFixed(3))
							.join(',')}
					</div>
				</div>
			))}
		</div>
	);
};

export default TableComponent;
