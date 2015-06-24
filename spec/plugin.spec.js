import $ from 'jquery';
import { MainPlugin } from '../lib/plugin';

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
			expect( $('#testContainer').html() ).toBe('<p>hello from ES6</p>');
			done();
		}, 50);
	});

});