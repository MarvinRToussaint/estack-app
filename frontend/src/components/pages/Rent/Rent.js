import React from 'react';
import { WaveBG } from '../../WaveBG/WaveBG';
import { Container } from '../../Container/Container';
import image50 from './assets/image50.png';

const Rent = () => {
	return (
		<div className="rent-container">
			<WaveBG src={image50} title="Rent" />
			<Container></Container>
		</div>
	);
};

export default Rent;
