const myNew = (constructor, ...args) => {
  let a = {}; 
  let b = constructor.call(a, ...args); 
  Object.setPrototypeOf(a, constructor.prototype);
  return b || a; 
};