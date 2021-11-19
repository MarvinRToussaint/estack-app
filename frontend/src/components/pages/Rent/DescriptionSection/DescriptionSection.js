import React from 'react';
import Header from '../Header/Header.js';

import './DescriptionSection.css';

const DescriptionSection = () => {
	return (
		<div className="description-section-container">
			<Header title="Detailed Description" />
			<div className="description-form">
				<form action="/action_page.php" className="description-form">
					{/* <label for="w3review">Review of W3Schools:</label> */}
					<textarea id="w3review" name="w3review" rows="4" cols="50">
						At w3schools.com you will learn how to make a website.
						They offer free tutorials in all web development
						technologies.
					</textarea>
				</form>
			</div>
		</div>
	);
};

export default DescriptionSection;
