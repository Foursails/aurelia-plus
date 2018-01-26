/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberValueConverter = /** @class */ (function () {
        function NumberValueConverter() {
        }
        NumberValueConverter.prototype.fromView = function (val) {
            var float = parseFloat(val);
            return Number.isFinite(float) ? float : val;
        };
        return NumberValueConverter;
    }());
    exports.NumberValueConverter = NumberValueConverter;
});
