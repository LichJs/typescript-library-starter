// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
export default class DummyClass {
  constructor() {
    this.hello();
  }

  public hello(){
    document.writeln('hello~');
  }
}
const library = new DummyClass();
console.log(library);