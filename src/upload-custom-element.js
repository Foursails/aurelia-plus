import { bindingMode } from 'aurelia-binding';
import { containerless, bindable } from 'aurelia-templating';

@containerless
export class UploadCustomElement {
  
  @bindable class;
  @bindable style;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) file;
  
  upload;
  
  onFileSelected = (event) => {
    this.file = event.target.files[0];
    event.target.value = null;
  }
  
  constructor() {
    this.upload = document.createElement('input');
    this.upload.type = 'file';
  }
  
  bind() {
    this.upload.addEventListener('change', this.onFileSelected);
  }
  
  unbind() {
    this.upload.removeEventListener('change', this.onFileSelected);
  }
}