/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateValueConverter = /** @class */ (function () {
        function DateValueConverter() {
        }
        DateValueConverter.prototype.toView = function (date) {
            if (!(date instanceof Date)) {
                date = new Date(date);
            }
            return date.toLocaleDateString();
        };
        return DateValueConverter;
    }());
    exports.DateValueConverter = DateValueConverter;
    var TimeValueConverter = /** @class */ (function () {
        function TimeValueConverter() {
        }
        TimeValueConverter.prototype.toView = function (date) {
            if (!(date instanceof Date)) {
                date = new Date(date);
            }
            return date.toLocaleTimeString();
        };
        return TimeValueConverter;
    }());
    exports.TimeValueConverter = TimeValueConverter;
    var DateTimeValueConverter = /** @class */ (function () {
        function DateTimeValueConverter() {
        }
        DateTimeValueConverter.prototype.toView = function (date) {
            if (!(date instanceof Date)) {
                date = new Date(date);
            }
            return date.toLocaleString();
        };
        return DateTimeValueConverter;
    }());
    exports.DateTimeValueConverter = DateTimeValueConverter;
});
