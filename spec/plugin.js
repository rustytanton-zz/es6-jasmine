import $ from 'jquery';
import { MainPlugin } from 'plugin';

describe('plugin', () => {

	afterEach(() => {
		$('#testContainer').remove();
	});

	beforeEach(() => {
		$('#testContainer').remove();
		$('body').append('<div id="testContainer"></div>');
	});

	it('should replace a test element with expected text', (done) => {
		expect(true).toBe(true);
		
		new MainPlugin( $('#testContainer') );
		setTimeout(() => {
			expect( $('#testContainer').html() ).toBe('hello from ES6');
			done();
		}, 50);
		
	});

});