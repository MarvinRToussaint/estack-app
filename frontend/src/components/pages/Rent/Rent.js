import React from 'react';
import { WaveBG } from '../../WaveBG/WaveBG';
import { Container } from '../../Container/Container';
import image50 from './assets/image50.png';
import InformationSection from './InformationSection/InformationSection';
import Amenities from './Amenities/Amenities';
import ImageSection from './ImageSection/ImageSection';
import WorthSection from './WorthSection/WorthSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import AdditionalFilesSection from './AdditionalFilesSection/AdditionalFilesSection';
import SubmitSection from './SubmitSection/SubmitSection';

const Rent = () => {
	return (
		<div className="rent-container">
			<WaveBG src={image50} title="" />
			<Container>
				<InformationSection />
				<Amenities />
				<ImageSection />
				<WorthSection />
				<DescriptionSection />
				<AdditionalFilesSection />
				<SubmitSection />
			</Container>
		</div>
	);
};

export default Rent;
