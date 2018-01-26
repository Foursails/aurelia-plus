/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JavaScriptConstantsViewEngineHooks = /** @class */ (function () {
        function JavaScriptConstantsViewEngineHooks() {
        }
        JavaScriptConstantsViewEngineHooks.prototype.beforeBind = function (view) {
            for (var _i = 0, _a = ['Array', 'Object', 'JSON', 'Date', 'Math', 'Number', 'RegExp', 'Reflect']; _i < _a.length; _i++) {
                var global_1 = _a[_i];
                view.overrideContext[global_1] = window[global_1];
            }
        };
        return JavaScriptConstantsViewEngineHooks;
    }());
    exports.JavaScriptConstantsViewEngineHooks = JavaScriptConstantsViewEngineHooks;
});
