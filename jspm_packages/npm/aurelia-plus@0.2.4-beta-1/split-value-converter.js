/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SplitValueConverter = /** @class */ (function () {
        function SplitValueConverter() {
        }
        SplitValueConverter.prototype.fromView = function (string, token) {
            if (token === void 0) { token = ' '; }
            return string.toString().split(token);
        };
        SplitValueConverter.prototype.toView = function (array, token) {
            if (token === void 0) { token = ' '; }
            return Array.from(array).join(token);
        };
        return SplitValueConverter;
    }());
    exports.SplitValueConverter = SplitValueConverter;
});
