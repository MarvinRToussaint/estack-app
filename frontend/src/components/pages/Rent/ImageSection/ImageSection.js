import React from 'react';
import Header from '../Header/Header';
import { Button } from '../../../Button/Button';

import './ImageSection.css';

const ImageSection = () => {
	const handleSubmit = () => console.log('IMAGE SUBMITTED');
	return (
		<div className="image-section-container">
			<Header title="Image Attachment" />
			<div className="image-display"></div>
			<Button
				className="upload-btn"
				type="submit"
				children="Upload Image"
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default ImageSection;
