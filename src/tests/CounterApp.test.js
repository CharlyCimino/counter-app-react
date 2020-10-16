
import { shallow } from "enzyme";
import React from 'react';
import CounterApp from './../CounterApp'

describe('Pruebas en <CounterApp />', () => {

	let wrapper;

	beforeEach(() => {
		// Se reinicia el componente antes de cada test()
		wrapper = shallow(<CounterApp value={0} />);
	})

	test('Debe mostrar <CounterApp /> correctamente', () => {

		expect(wrapper).toMatchSnapshot();
	})

	test('Pruebas en el valor del contador', () => {

		const wrapper = shallow(<CounterApp value={100} />);
		const valor = wrapper.find('h2').text().trim();
		expect(valor).toBe('100');
	})

	test('Debe incrementar +1', () => {

		wrapper.find('button').at(0).simulate('click'); // Simula un click en el primer boton
		const valor = wrapper.find('h2').text().trim();
		expect(valor).toBe('1');
	})

	test('Debe decrementar -1', () => {

		wrapper.find('button').at(2).simulate('click'); // Simula un click en el tercer boton
		const valor = wrapper.find('h2').text().trim();
		expect(valor).toBe('-1');
	})

	test('Debe resetear', () => {

		wrapper.find('button').at(1).simulate('click'); // Simula un click en el tercer boton
		const valor = wrapper.find('h2').text().trim();
		expect(valor).toBe('0');
	})

})
