import $ from 'jquery';
import { bsp_utils } from '../util/bsp-utils';
import utility from './utility';

export default bsp_utils.plugin(false, 'bsp', 'example-plugin', {
    '_each': function(item) {
        var options = this.option(item);
        var moduleInstance = Object.create(utility);
        moduleInstance.init($(item), options);
    }
});