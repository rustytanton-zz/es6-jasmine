import { $ } from 'jquery';

export class MainPlugin {
	constructor($el) {
		$el.html('hello from ES6');
	}
}