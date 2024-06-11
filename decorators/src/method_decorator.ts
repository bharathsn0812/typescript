function MethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("MethodDecorator applied to:", propertyKey);
}

class MyClassWithMethod {
  @MethodDecorator
  myMethod() {
    console.log("myMethod called.");
  }
}

const instanceWithMethod = new MyClassWithMethod();
instanceWithMethod.myMethod();
