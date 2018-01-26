import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.globalResources([
    PLATFORM.moduleName('./date-time-value-converter'),
    PLATFORM.moduleName('./filter-value-converter'),
    PLATFORM.moduleName('./globals-view-engine-hooks'),
    PLATFORM.moduleName('./json-value-converter'),
    PLATFORM.moduleName('./number-value-converter'),
    PLATFORM.moduleName('./refresh-binding-behavior'),
    PLATFORM.moduleName('./split-value-converter'),
    PLATFORM.moduleName('./type-custom-attribute'),
    PLATFORM.moduleName('./upload-custom-element'),
  ]);
}
