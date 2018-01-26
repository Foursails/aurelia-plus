/* */ 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-binding", "aurelia-templating"], function (require, exports, aurelia_binding_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadCustomElement = /** @class */ (function () {
        function UploadCustomElement() {
            var _this = this;
            this.onFileSelected = function (event) {
                _this.file = event.target.files[0];
                event.target.value = null;
            };
            this.upload = document.createElement('input');
            this.upload.type = 'file';
        }
        UploadCustomElement.prototype.bind = function () {
            this.upload.addEventListener('change', this.onFileSelected);
        };
        UploadCustomElement.prototype.unbind = function () {
            this.upload.removeEventListener('change', this.onFileSelected);
        };
        __decorate([
            aurelia_templating_1.bindable
        ], UploadCustomElement.prototype, "class", void 0);
        __decorate([
            aurelia_templating_1.bindable
        ], UploadCustomElement.prototype, "style", void 0);
        __decorate([
            aurelia_templating_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
        ], UploadCustomElement.prototype, "file", void 0);
        UploadCustomElement = __decorate([
            aurelia_templating_1.containerless
        ], UploadCustomElement);
        return UploadCustomElement;
    }());
    exports.UploadCustomElement = UploadCustomElement;
});
