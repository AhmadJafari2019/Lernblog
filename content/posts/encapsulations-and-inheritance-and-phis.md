+++
title = "Encapsulations and Inheritance and Polymorphism"
date = "2019-09-20"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
**Encapsulations**:   encapsulation provides the following benefits.

**\-** Control of the way data is accessed or modified

\- More flexible and easily changed code

**\-** Ability to change one part of the code without affecting other parts

**Inheritance:**

Inheritance is the process that enables one class to acquire the properties (methods and variables) of another. With inheritance, the information is placed in a more manageable, hierarchical order. To inherit from a class, use the extends keyword(like: class Dog extends Animal).

**Polymorphism**

which refers to the idea of "having many forms", occurs when there is a hierarchy of classes related to each other through inheritance. A call to a member method will cause a different implementation to be executed, depending on the type of the object invoking the method. Polymorphism is one method with different implementations.

`class Animal {`

`  public void makeSound() {`

`    System.out.println("Grr...");`

`  }`

`}`

`class Cat extends Animal {`

`  public void makeSound() {`

`    System.out.println("Meow");`

`  }`

`}`

`class Dog extends Animal {`

`  public void makeSound() {`

`    System.out.println("Woof");`

`  }`

`}`

As all Cat and Dog objects are Animal objects, we can do the following in main:

`public static void main(String[ ] args) {`

`  Animal a = new Dog();`

`  Animal b = new Cat();`

`}`

**Overriding**

`class Animal {`

`    public void makeSound() {`

`        System.out.println("Grr...");`

`    }`

`}`

`class Cat extends Animal {`

`    public void makeSound() {`

`        System.out.println("Meow");`

`    }`

`}`

In the code above the cat class override the makeSound method  of  its supper class.

**Rules for Method Overriding:**

\- Should have the same return type and arguments

\- The access level cannot be more restrictive than the overridden method's access level (Example: If the superclass method is declared public, the overriding method in the sub class can be neither private nor protected).

\- A method declared final or static cannot be overridden

\- If a method cannot be inherited, it cannot be overridden.

\- Constructors cannot be overridden.

**Method Overloading**

When methods have the same name, but different parameters, it is known as method overloading.

This can be very useful when you need the same method functionality for different types of parameters. Another name for method overloading is compile-time polymorphism.

**Abstract**

In Java, abstraction is achieved using abstract classes and interfaces.

An abstract class is defined using the abstract keyword.

\- If a class is declared abstract it cannot be instantiated (you cannot create objects of that type).

\- To use an abstract class, you have to inherit it from another class.

\- Any class that contains an abstract method should be defined as abstract. (like: abstract void walk();).

**Interfaces**

An interface is a completely abstract class that contains only abstract methods.

Some specifications for interfaces:

\- Defined using the interface keyword.

\- May contain only static final variables.

\- Cannot contain a constructor because interfaces cannot be instantiated.

\- Interfaces can extend other interfaces.

\- A class can implement any number of interfaces.

Use an implement keyword to use an interface class.

`interface Animal {`

`  public void eat();`

`  public void makeSound();`

`}`

`class Cat implements Animal {`

`  public void makeSound() {`

`    System.out.println("Meow");`

`  }`

`  public void eat() {`

`    System.out.println("omnomnom");`

`  }`

`}`

When we use an interface, we have to override all of its methods. 

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
