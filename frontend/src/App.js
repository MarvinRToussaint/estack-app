import React from 'react';

import './App.css';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Header from './components/Header/Header';

function App() {
	return (
		<div style={{ padding: 0, margin: 0 }}>
			<Header />
			<Landing />
		</div>
	);
}

export default App;
