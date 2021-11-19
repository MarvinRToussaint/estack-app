import React, { useState } from 'react';
import Header from '../Header/Header';

import './Amenities.css';

const Amenities = () => {
	const [AC, setAC] = useState('false');
	const [balcony, setBalcony] = useState('false');
	const [disabledAccess, setDisabledAccess] = useState('false');
	const [garage, setGarage] = useState('false');
	const [furnished, setFurnished] = useState('false');
	const [woodFlooring, setWoodFlooring] = useState('false');
	const [streetParking, setStreetParking] = useState('false');

	console.log(AC);
	console.log(balcony);
	return (
		<div className="amenities-container">
			<Header title={'Amenities'} />
			<div className="form-container">
				<form>
					<div className="form-group form-group1">
						<input
							type="checkbox"
							id="html"
							onChange={(e) => setAC(!AC)}
						/>
						<label for="html">Air Conditioning</label>
					</div>
					<div className="form-group form-group2">
						<input
							type="checkbox"
							id="css"
							onChange={(e) => setBalcony(!balcony)}
						/>
						<label for="css">Balcony or Deck</label>
					</div>
					<div className="form-group form-group3">
						<input
							type="checkbox"
							id="javascript"
							onChange={(e) => setDisabledAccess(!disabledAccess)}
						/>
						<label for="javascript">Wheelchair access</label>
					</div>
					<div className="form-group form-group1">
						<input
							type="checkbox"
							id="html"
							onChange={(e) => setGarage(!garage)}
						/>
						<label for="html">Garage</label>
					</div>
					<div className="form-group form-group2">
						<input
							type="checkbox"
							id="css"
							onChange={(e) => setFurnished(!furnished)}
						/>
						<label for="css">Furnished</label>
					</div>
					<div className="form-group form-group3">
						<input
							type="checkbox"
							id="javascript"
							onChange={(e) => setWoodFlooring(!woodFlooring)}
						/>
						<label for="javascript">Hardwood flooring</label>
					</div>
					<div className="form-group form-group3">
						<input
							type="checkbox"
							id="javascript"
							onChange={(e) => setStreetParking(!streetParking)}
						/>
						<label for="javascript">Offstreet Parking</label>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Amenities;
