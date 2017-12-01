export class SplitValueConverter {
  fromView(string, token = ' ') {
    return string.toString().split(token);
  }
  toView(array, token = ' ') {
    return Array.from(array).join(token);
  }
}