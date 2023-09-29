import React, { FC } from 'react';
import './personal.css';

type PersonalProps = {
	name: string;
	email: string;
	phone: string;
	linkedin: string;
	github: string;
};

const Personal: FC<PersonalProps> = ({
	name,
	email,
	phone,
	linkedin,
	github,
}) => {
	return (
		<div className="personal-info">
			<h1>Appplicant Information</h1>
			<div className="info-item">
				<span className="label">Name:</span>
				<span>{name}</span>
			</div>
			<div className="info-item">
				<span className="label">Email:</span>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
			<div className="info-item">
				<span className="label">Phone:</span>
				<span>{phone}</span>
			</div>
			<div className="info-item">
				<span className="label">LinkedIn:</span>
				<a href={linkedin} target="_blank" rel="noopener noreferrer">
					{linkedin}
				</a>
			</div>
			<div className="info-item">
				<span className="label">GitHub:</span>
				<a href={github} target="_blank" rel="noopener noreferrer">
					{github}
				</a>
			</div>
		</div>
	);
};

export default Personal;
