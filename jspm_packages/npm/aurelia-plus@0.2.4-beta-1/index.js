/* */ 
define(["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./date-time-value-converter'),
            aurelia_pal_1.PLATFORM.moduleName('./filter-value-converter'),
            aurelia_pal_1.PLATFORM.moduleName('./globals-view-engine-hooks'),
            aurelia_pal_1.PLATFORM.moduleName('./json-value-converter'),
            aurelia_pal_1.PLATFORM.moduleName('./number-value-converter'),
            aurelia_pal_1.PLATFORM.moduleName('./refresh-binding-behavior'),
            aurelia_pal_1.PLATFORM.moduleName('./split-value-converter'),
            aurelia_pal_1.PLATFORM.moduleName('./type-custom-attribute'),
            aurelia_pal_1.PLATFORM.moduleName('./upload-custom-element'),
        ]);
    }
    exports.configure = configure;
});
