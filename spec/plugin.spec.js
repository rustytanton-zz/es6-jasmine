import $ from 'jquery';
import { MainPlugin } from 'plugin';

describe('plugin', () => {

	beforeEach(() => {
		$('body').append('<div id="testContainer"></div>');
	});

	afterEach(() => {
		$('#testContainer').remove();
	});

	it('should replace a test element with expected text', (done) => {
		new MainPlugin( $('#testContainer') );
		setTimeout(() => {
			expect( $('#testContainer').html() ).toBe('hello from ES6');
			done();
		}, 50);
	});

});