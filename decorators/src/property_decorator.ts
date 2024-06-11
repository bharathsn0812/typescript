function PropertyDecorator(target: any, propertyKey: string) {
  console.log("PropertyDecorator applied to:", propertyKey);
}

class MyClassWithProperty {
  @PropertyDecorator
  myProperty: string;

  constructor() {
    this.myProperty = "Hello, World!";
    console.log("Property value:", this.myProperty);
  }
}

const instanceWithProperty = new MyClassWithProperty();
