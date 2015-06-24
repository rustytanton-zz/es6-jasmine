import { $ } from 'jquery';
import template from '../templates/plugin';

export class MainPlugin {
	constructor($el) {
		$el.html(template);
	}
}