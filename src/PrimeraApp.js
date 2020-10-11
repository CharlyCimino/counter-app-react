import React from "react";

const PrimeraApp = () => {
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
		</>
	);

	/* Dejar las etiquetas vacías es similar a:
		<Fragment>
			<h1>Hola mundo</h1>
			<p>Mi primera app</p>
		<Fragment/>
	*/
}

export default PrimeraApp;