/* */ 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RefreshBindingBehavior = /** @class */ (function () {
        function RefreshBindingBehavior() {
        }
        RefreshBindingBehavior.prototype.bind = function (binding, source, frequency) {
            var _this = this;
            if (frequency === void 0) { frequency = 100; }
            var updateTarget = this.updateTarget = binding.updateTarget.bind(binding);
            binding.updateTarget = function () { };
            var oldValue = this.evaluate(binding, source);
            updateTarget(oldValue);
            this.timer = setInterval(function () {
                var newValue = _this.evaluate(binding, source);
                if (newValue !== oldValue) {
                    updateTarget(newValue);
                    oldValue = newValue;
                }
            }, frequency);
        };
        RefreshBindingBehavior.prototype.unbind = function (binding, source) {
            clearInterval(this.timer);
            binding.updateTarget = this.updateTarget;
        };
        RefreshBindingBehavior.prototype.evaluate = function (binding, source) {
            return binding.sourceExpression.evaluate(source, binding.lookupFunctions);
        };
        return RefreshBindingBehavior;
    }());
    exports.RefreshBindingBehavior = RefreshBindingBehavior;
});
