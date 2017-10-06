export function logMethod(): MethodDecorator {

  return (klass, methodName) => {
    console.log(`@logMethod() called for ${klass.constructor.name}::${methodName}`);
    const methodDescriptor = Object.getOwnPropertyDescriptor(klass, methodName);
    const originalMethod = methodDescriptor.value;

    methodDescriptor.value = function (...args: any[]) {
      klass['__METHOD__'] = methodName;
      const result = originalMethod.apply(this, args);
      const r = JSON.stringify(result);
      const a = args.map(a1 => (JSON.stringify(a1) || a1.toString())).join();
      console.log(`CALLED: ${klass.constructor.name}::${methodName}(${a}) => ${r}`);
      return result;
    };

    return methodDescriptor;
  };
}
