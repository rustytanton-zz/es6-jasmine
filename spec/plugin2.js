import $ from 'jquery';
import { MainPlugin } from 'plugin';

describe('plugin2', () => {

	afterEach(() => {
		$('#testContainer2').remove();
	});

	beforeEach(() => {
		$('#testContainer').remove();
		$('body').append('<div id="testContainer2"></div>');
	});

	it('should replace a test element with expected text', (done) => {
		expect(true).toBe(true);
		
		new MainPlugin( $('#testContainer2') );
		setTimeout(() => {
			expect( $('#testContainer2').html() ).toBe('hello from ES6');
			done();
		}, 50);
		
	});

});