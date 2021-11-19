import React, { useState } from 'react';
import { Button } from '../../../Button/Button';

import './SubmitSection.css';

const SubmitSection = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="submit-section-container">
			<h1>Ready To Publish?</h1>
			<form>
				<label for="email" className="email">
					Email{' '}
				</label>
				<input
					id="email"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label for="password" className="password">
					Password{' '}
				</label>
				<input
					id="password"
					type="text"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</form>
			<Button children="Submit" />
		</div>
	);
};

export default SubmitSection;
