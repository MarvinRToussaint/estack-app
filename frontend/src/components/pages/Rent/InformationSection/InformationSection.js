import React, { useState } from 'react';
import Header from '../Header/Header';
import './InformationSection.css';

const InputForm = () => {
	const [address, setAddress] = useState('');
	const [propertyType, setPropertyType] = useState('');
	const [yearBuilt, setYearBuilt] = useState('');
	const [bedrooms, setBedrooms] = useState('');
	const [bathrooms, setBathrooms] = useState('');
	const [squareFootage, setSquareFootage] = useState('');
	const [dateAvailable, setDateAvailable] = useState('');
	const [leaseDuration, setLeaseDuration] = useState('');

	console.log(address);
	console.log(bathrooms);

	return (
		<div className="input-form-container">
			<Header title={'Information & Details'} />
			<div className="input-form">
				<form className="input-form" action="">
					<div className="input a">
						<label for="address" className="address">
							Address
						</label>
						<input
							id="address"
							type="text"
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="input b">
						<label for="=propType a" className="propType">
							Property Type
						</label>
						<input
							id="prop-type"
							type="text"
							onChange={(e) => setPropertyType(e.target.value)}
						/>
					</div>
					<div className="input c">
						<label for="year">Year Built</label>
						<input
							id="year"
							type="number"
							onChange={(e) => setYearBuilt(e.target.value)}
						/>
					</div>
					<div className="input d">
						<label for="Bedrooms">Bedrooms</label>
						<input
							id="bedrooms"
							type="number"
							onChange={(e) => setBedrooms(e.target.value)}
						/>
					</div>
					<div className="input e">
						<label for="Bathrooms">Bathrooms</label>
						<input
							id="bathrooms"
							type="number"
							onChange={(e) => setBathrooms(e.target.value)}
						/>
					</div>
					<div className="input f">
						<label for="Square Footage">Square Footage</label>
						<input
							id="sqr-footage"
							type="number"
							onChange={(e) => setSquareFootage(e.target.value)}
						/>
					</div>
					<div className="input g">
						<label for="Square Footage">Date Available</label>
						<input
							id="sqr-footage"
							type="date"
							onChange={(e) => setDateAvailable(e.target.value)}
						/>
					</div>
					<div className="input h">
						<label for="Square Footage">Lease Duration</label>
						<input
							id="sqr-footage"
							type="number"
							onChange={(e) => setLeaseDuration(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default InputForm;
