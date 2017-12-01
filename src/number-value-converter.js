export class NumberValueConverter {
  fromView(val) {
    let float = parseFloat(val);
    return Number.isFinite(float) ? float : val;
  }
}