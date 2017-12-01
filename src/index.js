import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.globalResources([
    PLATFORM.moduleName('./refresh-binding-behavior'),
    PLATFORM.moduleName('./type-custom-attribute'),
    PLATFORM.moduleName('./upload-custom-element'),
    PLATFORM.moduleName('./globals-view-engine-hooks'),
    PLATFORM.moduleName('./date-time-value-converter'),
    PLATFORM.moduleName('./filter-value-converter'),
    PLATFORM.moduleName('./json-value-converter'),
    PLATFORM.moduleName('./number-value-converter'),
    PLATFORM.moduleName('./sort-value-converter')
  ]);
}