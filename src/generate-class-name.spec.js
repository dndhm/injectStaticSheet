import generateClassName from './generate-class-name';

describe('generateClassName', () => {
	test('should return correctly formatted className for given rule and sheet', () => {
		const rule = {
			key: 'className',
		};
		const sheet = {
			options: {
				classNamePrefix: 'Component-',
			},
		};
		const expected = 'Component--className';
		expect(generateClassName(rule, sheet)).toBe(expected);
	});
});