
export const myVariable = 42;
export function greet(name) {
  return `Hello, ${name}!`;
}
export class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, my name is ${this.name}.`;
  }
}
