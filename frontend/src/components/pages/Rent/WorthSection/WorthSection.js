import React, { useState } from 'react';
import Header from '../Header/Header';

import './WorthSection.css';

const WorthSection = () => {
	const [rent, setRent] = useState(0);
	const [deposit, setDeposit] = useState(0);
	const [cleaningFee, setCleaningFee] = useState(0);

	return (
		<div className="worth-section-container">
			<Header title="Worth" />
			<div className="worth-inputs">
				<form className="" action="">
					<label for="rent" className="rent">
						Monthly Rent{' '}
					</label>
					<input
						id="rent"
						type="number"
						onChange={(e) => setRent(e.target.value)}
					/>

					<label for="deposit" className="deposit">
						Security Deposit{' '}
					</label>
					<input
						id="deposit"
						type="number"
						onChange={(e) => setDeposit(e.target.value)}
					/>

					<label for="fee">Cleaning Fee</label>
					<input
						id="fee"
						type="number"
						onChange={(e) => setCleaningFee(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
};

export default WorthSection;
