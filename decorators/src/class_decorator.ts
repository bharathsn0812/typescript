function ClassDecorator(constructor: Function) {
  console.log("ClassDecorator applied to:", constructor.name);
}

@ClassDecorator
class MyClass {
  constructor() {
    console.log("MyClass instance created.");
  }
}

const instance = new MyClass();
