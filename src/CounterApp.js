// Snippets: rafc, rafce, rafcp

import React from 'react'; // Snippet: imr
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
	return (
		<>
			<h1>CounterApp</h1>
			<h2>{value}</h2>
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired
}

export default CounterApp;
