
describe('Pruebas en el archivo demo.test.js', () => {
	test('Deben ser iguales', () => {
		const mensaje = 'Hola mundo';

		const mensaje2 = `Hola mundo`;

		expect(mensaje).toBe(mensaje2);
	})
})


