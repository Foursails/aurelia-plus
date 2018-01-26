/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JsonValueConverter = /** @class */ (function () {
        function JsonValueConverter() {
        }
        JsonValueConverter.prototype.toView = function (val, pretty) {
            if (pretty === void 0) { pretty = false; }
            return JSON.stringify(val, null, pretty ? 2 : 0);
        };
        return JsonValueConverter;
    }());
    exports.JsonValueConverter = JsonValueConverter;
});
