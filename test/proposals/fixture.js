export default class Test {
  message = this.message;
  static displayName = "Test";

  render() {
    return import("./test").then(mod => {
      return mod.data;
    });
  }
}
