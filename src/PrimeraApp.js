import React from "react";
import PropTypes from "prop-types";

// Se usa desestructuracion, para evitar colocar 'props.____' todo el tiempo
// const PrimeraApp = (props) => {
const PrimeraApp = ({ ejemplo = 'Valor default' }) => {
	const saludo = `Hola Mundo`;
	const obj = {
		nombre: "Carlos",
		edad: 27
	};

	return (
		<>
			<h1>{saludo}</h1>
			<pre>{JSON.stringify(obj, null, 4)}</pre>
			<p>Mi primera app</p>
			<h2>Props</h2>
			{/* <p>{props.ejemplo}</p> */}
			<p>{ejemplo}</p>
		</>
	);

	/* Dejar las etiquetas vacías es similar a:
		<Fragment>
				<h1>Hola mundo</h1>
				<p>Mi primera app</p>
				<Fragment />
	*/
}

PrimeraApp.propTypes = {
	ejemplo: PropTypes.string.isRequired // Se espera ejemplo de tipo string. Ademas, es obligatorio
	// otroEjemplo: PropTypes.string // Se espera otroEjemplo de tipo string. No es obligatorio
}

export default PrimeraApp;