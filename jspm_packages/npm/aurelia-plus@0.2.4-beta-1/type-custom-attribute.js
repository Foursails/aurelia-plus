/* */ 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-pal"], function (require, exports, aurelia_dependency_injection_1, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TypeCustomAttribute = /** @class */ (function () {
        function TypeCustomAttribute(element) {
            this.element = element;
        }
        TypeCustomAttribute.prototype.created = function (owningView) {
            this.owningView = owningView;
        };
        TypeCustomAttribute.prototype.bind = function () {
            var _this = this;
            if (this.isNumberElement(this.element)) {
                var valueBinding = this.valueBinding = this.owningView.bindings
                    .find(function (b) { return b.target === _this.element && b.targetProperty === 'value'; });
                if (valueBinding) {
                    this.updateSource = valueBinding.updateSource;
                    this.updateTarget = valueBinding.updateTarget;
                    var updateSource_1 = this.updateSource.bind(valueBinding);
                    var updateTarget_1 = this.updateTarget.bind(valueBinding);
                    valueBinding.updateSource = function (v) { return ((v = parseFloat(v)) || v === 0) && updateSource_1(v); };
                    valueBinding.updateTarget = function (v) { return Number.isFinite(v) && updateTarget_1(v); };
                }
            }
        };
        TypeCustomAttribute.prototype.unbind = function () {
            if (this.valueBinding) {
                this.valueBinding.updateSource = this.updateSource;
                this.valueBinding.updateTarget = this.updateTarget;
            }
        };
        TypeCustomAttribute.prototype.isNumberElement = function (element) {
            return /^input$/i.test(element.tagName) && /^number$/i.test(element.type);
        };
        TypeCustomAttribute = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_pal_1.DOM.Element)
        ], TypeCustomAttribute);
        return TypeCustomAttribute;
    }());
    exports.TypeCustomAttribute = TypeCustomAttribute;
});
