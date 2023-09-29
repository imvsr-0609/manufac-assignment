import React, { FC } from 'react';
import './table.css';
import { CalculatedWindeObject } from '../../typings/wine';

type TableProps = {
	data: CalculatedWindeObject[];
};

const TableComponent: FC<TableProps> = ({ data }) => {
	return (
		<div className="flexbox-table">
			{/* Table header */}
			<div className="table-header">
				{/* <div className="table-cell">Measure</div> */}
				{data.map((item, index) => (
					<div key={index} className="table-cell">
						Class {item.class}
					</div>
				))}
			</div>

			{/* Table rows */}
			{data.map((item, index) => (
				<div className="table-row" key={index}>
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
