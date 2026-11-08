# Type Narrowing in TypeScript

### Type Narrowing is an important feature in TypeScript. It helps us make a variable's type more specific than its original type. Sometimes a variable can have multiple possible types. Type Narrowing helps TypeScript understand which type we are working with at a particular time.

## Examples:

### There are different ways to do Type Narrowing in TypeScript.

## 1. Using typeof

```
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

### Here, TypeScript understands that the value is a string inside the first block and a number inside the else block.

## 2. Using instanceof

```
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

## 3. Using the in Operator

### The in operator checks whether a property exists in an object.

```
type Admin = { name: string; role: string };
type User = { name: string; email: string };

function showInfo(person: Admin | User) {
  if ("role" in person) {
    console.log(person.role);
  } else {
    console.log(person.email);
  }
}
```

### Type Narrowing makes our code safer and easier to understand. It helps TypeScript identify the correct type before using its properties or methods. We can use typeof, instanceof, in and other depending on our needs.
