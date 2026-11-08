# Type vs Interface in TypeScript

### In TypeScript, both type and interface are used to define the shape of data. They help us describe what properties and values an object should have. Although they look similar, they have some differences.

## Differences

### The first difference is that an interface is mainly used to define the structure of objects. On the other hand, type can be used for objects, unions, primitives, and more.

## For example:

```
interface User {
name: string;
age: number;
}

type Student = {
name: string;
age: number;
}
```

Both examples do the same thing. They define an object with a name and age.

## Another difference is extends: An interface uses the extends keyword to extend another interface.

```
interface Person {
  name: string;
}

interface User extends Person {
  age: number;
}
```

### But with type, we can use intersections (&) to combine two types.

```
type Person = {
  name: string;
};

type User = Person & {
  age: number;
}
```

### One important difference is that interfaces can be declared multiple times with the same name. TypeScript automatically combines them. This is called declaration merging. But we cannot do the same with type aliases.

## When Should We Use Them?

### I usually prefer interface when working with objects, especially when creating reusable object structures. I use type when I need union types, primitive types, or more complex type combinations.

### Both type and interface are useful in TypeScript. They have some differences, but we can use both to define object structures
