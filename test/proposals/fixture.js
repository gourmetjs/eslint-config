export default class Test {
  message = this.message;
  static displayName = "Test";

  render() {
    return import("./test").then(mod => {
      if (process.env.NODE_ENV !== "production")
        console.log("*");
      return mod.data;
    });
  }
}
