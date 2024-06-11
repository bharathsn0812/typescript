function ParameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`ParameterDecorator applied to: ${propertyKey}, parameter index: ${parameterIndex}`);
}

class MyClassWithParameter {
  myMethod(@ParameterDecorator param1: any, @ParameterDecorator param2: any) {
    console.log("myMethod called with parameters:", param1, param2);
  }
}

const instanceWithParameter = new MyClassWithParameter();
instanceWithParameter.myMethod("param1", "param2");
