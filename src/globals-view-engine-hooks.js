export class JavaScriptConstantsViewEngineHooks {
  beforeBind(view) {
    for (let global of ['Array','Object','JSON','Date','Math','Number','RegExp','Reflect']) {
      view.overrideContext[global] = window[global];
    }
  }
}