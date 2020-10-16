import { render } from "@testing-library/react"
import { shallow } from "enzyme";
import React from 'react';
import PrimeraApp from './../PrimeraApp'

describe('Pruebas en <PrimeraApp />', () => {
	test('Debe mostrar <PrimeraApp /> correctamente', () => {
		const ej = "Hola que tal";

		const wrapper = shallow(<PrimeraApp ejemplo={ej} />);

		expect(wrapper).toMatchSnapshot();
	})

	test('Debe mostrar subtitulo via props', () => {
		const ej = "Hola que tal";

		const wrapper = shallow(<PrimeraApp ejemplo={ej} otroEjemplo={"Un subtitulo via props"} />);
		const textoParrafo = wrapper.find('p').get(2).props.children; // Busca parrafos
		expect(textoParrafo).toMatchSnapshot("Un subtitulo via props");
	})

})
