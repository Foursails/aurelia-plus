/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MODES = {
        'exact': function (a) { return function (b) { return new RegExp("^" + a + "$", 'i').test(b); }; },
        'startsWith': function (a) { return function (b) { return new RegExp("^" + a, 'i').test(b); }; },
        'endsWith': function (a) { return function (b) { return new RegExp(a + "$", 'i').test(b); }; },
        'contains': function (a) { return function (b) { return new RegExp("" + a, 'i').test(b); }; },
        '>=': function (a) { return function (b) { return b >= a; }; },
        '>': function (a) { return function (b) { return b > a; }; },
        '<=': function (a) { return function (b) { return b <= a; }; },
        '<': function (a) { return function (b) { return b < a; }; },
        '==': function (a) { return function (b) { return b == a; }; }
    };
    var FilterValueConverter = /** @class */ (function () {
        function FilterValueConverter() {
        }
        FilterValueConverter.prototype.toView = function (array, opts) {
            if (!opts) {
                console.warn("Filter is incorrectly configured. No filter will be applied.");
                return array;
            }
            if (!opts.value) {
                return array;
            }
            var props;
            if (opts.on) {
                props = Array.isArray(opts.on) ? opts.on : [opts.on];
            }
            var vals = Array.isArray(opts.value) ? opts.value : [opts.value];
            var mode;
            if (typeof (opts.mode) == 'function') {
                mode = 'custom';
            }
            else if (opts.mode) {
                mode = opts.mode;
            }
            else {
                mode = 'contains';
            }
            var method = (opts.strict == false && vals.length) ? 'some' : 'every';
            return array.filter(function (item) {
                return vals[method](function (val) {
                    var test = (mode == 'custom' ? opts.mode.bind(undefined, val) : MODES[mode](val));
                    return props ? props.some(function (prop) { return test(item[prop]); }) : test(item);
                });
            });
        };
        return FilterValueConverter;
    }());
    exports.FilterValueConverter = FilterValueConverter;
});
