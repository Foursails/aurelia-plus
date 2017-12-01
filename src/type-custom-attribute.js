import { inject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';

@inject(DOM.Element)
export class TypeCustomAttribute {

  constructor(element) {
    this.element = element;
  }
  
  created(owningView) {
    this.owningView = owningView;
  }
  
  bind() {
    if (this.isNumberElement(this.element)) {
      let valueBinding = this.valueBinding = this.owningView.bindings
        .find(b => b.target === this.element && b.targetProperty === 'value');
      if (valueBinding) {
        this.updateSource = valueBinding.updateSource;
        this.updateTarget = valueBinding.updateTarget;
        let updateSource = this.updateSource.bind(valueBinding);
        let updateTarget = this.updateTarget.bind(valueBinding);
        valueBinding.updateSource = (v) => ((v = parseFloat(v)) || v === 0) && updateSource(v);
        valueBinding.updateTarget = (v) => Number.isFinite(v) && updateTarget(v); 
      }
    }
  }
  
  unbind() {
    if (this.valueBinding) {
      this.valueBinding.updateSource = this.updateSource;
      this.valueBinding.updateTarget = this.updateTarget;
    }
  }
  
  isNumberElement(element) {
    return /^input$/i.test(element.tagName) && /^number$/i.test(element.type);
  }
}