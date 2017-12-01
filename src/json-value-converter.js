export class JsonValueConverter {
  toView(val, pretty = false) {
    return JSON.stringify(val, null, pretty ? 2 : 0);
  }
}