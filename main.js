export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-plus');

  aurelia.start()
    .then(() => aurelia.enhance());
}