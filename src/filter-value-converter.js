const MODES = {
  'exact': (a) => (b) => new RegExp(`^${a}$`, 'i').test(b),
  'startsWith': (a) => (b) => new RegExp(`^${a}`, 'i').test(b),
  'endsWith': (a) => (b) => new RegExp(`${a}$`, 'i').test(b),
  'contains': (a) => (b) => new RegExp(`${a}`, 'i').test(b),
  '>=': (a) => (b) => b >= a,
  '>': (a) => (b) => b > a,
  '<=': (a) => (b) => b <= a,
  '<': (a) => (b) => b < a,
  '==': (a) => (b) => b == a
}

export class FilterValueConverter {
  toView(array, opts) {
    if (!opts) {
      console.warn("Filter is incorrectly configured. No filter will be applied.")
      return array;
    }
    if (!opts.value) {
      return array;
    }
    let props;
    if (opts.on) {
      props = Array.isArray(opts.on) ? opts.on : [opts.on];
    } 
    let vals = Array.isArray(opts.value) ? opts.value : [opts.value];
    let mode;
    if (typeof(opts.mode) == 'function') {
      mode = 'custom';
    } else if (opts.mode) {
      mode = opts.mode;
    } else {
      mode = 'contains';
    }
    let method = (opts.strict == false && vals.length) ? 'some' : 'every';
    return array.filter((item) => { 
      return vals[method]((val) => {
        let test = (mode == 'custom' ? opts.mode.bind(undefined, val) : MODES[mode](val));
        return props ? props.some((prop) => test(item[prop])) : test(item);
      });
    });
  }
}