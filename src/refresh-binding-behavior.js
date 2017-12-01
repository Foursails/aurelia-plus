export class RefreshBindingBehavior {

  timer;
  updateTarget;

  bind(binding, source, frequency = 100) {
    
    let updateTarget = this.updateTarget = binding.updateTarget.bind(binding);
    binding.updateTarget = () => {};

    let oldValue = this.evaluate(binding, source);
    updateTarget(oldValue);

    this.timer = setInterval(() => {
      let newValue = this.evaluate(binding, source);
      if (newValue !== oldValue) {
        updateTarget(newValue);
        oldValue = newValue;
      }
    }, frequency);
  }
 
  unbind(binding, source) {
    clearInterval(this.timer);
    binding.updateTarget = this.updateTarget;
  }

  evaluate(binding, source) {
    return binding.sourceExpression.evaluate(source, binding.lookupFunctions);
  }
}

