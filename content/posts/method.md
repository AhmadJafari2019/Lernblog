+++
title = "Method "
date = "2019-09-17"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
**Method**

A method is a collection of statements that are grouped together to perform an operation. System.out.println() is an example of a method.

`class MyClass {  `

`  static void sayHello(String name) {`

`    System.out.println("Hello " + name);`

`  }`

` public static void main(String[ ] args) {`

`    sayHello("David");`

`    sayHello("Amy");`

`  }`

`} `.          // Hello David .   // Hello Amy

**The Return Type**

The return keyword can be used in methods to return a value.

For example, we could define a method named sum that returns the sum of its two parameters.

`class MyClass {`

`static int sum(int val1, int val2) {`

`  return val1 + val2;`

`}`

`  public static void main(String[ ] args) {`

`  int x = sum(2, 5);`

`    System.out.println(x);`

`  }`

`} .       `// Outputs "7"

**Making a Method in Java**

`public class Ahmad {`

`    void hey() {`

`        System.out.println("Hello and Welcome");}`

`}`

`class MyClass {`

`    public static void main(String [ ] args) {`

`       Ahmad greet = new Ahmad();`

`        greet.hey();`

`       }    `

`}`

**How to access the Object attribute in an Object:**

`public class Vehicle {`

`    int maxSpeed;`

`    int wheels;`

`    String color;`

`    double fuelCapacity;      `

`    void horn() {`

`        System.out.println("Beep!");`

`    }`

`}`

`class MyClass {`

`    public static void main(String[ ] args) {`

`        Vehicle v1 = new Vehicle();`

`        Vehicle v2 = new Vehicle();`

`        v1.color = "red";`

`        v2.horn();`

`    }`

`}`

**Access Modifiers**

public static void main(String\[ ] args) => public is an access modifier, meaning that it is used to set the level of access. You can use access modifiers for classes, attributes, and methods.

**The available modifier for classes**

**public:** The class is accessible by any other class.

**default:** The class is accessible only by classes in the same package.

**The available modifier for attributes and method.**

**default:** A variable or method declared with no access control modifier is available to any other class in the same package.

**public:** Accessible from any other class.

**protected:** Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).

**private:** Accessible only within the declared class itself.

**Getters & Setters**

**Getters** start with get, followed by the variable name, with the first letter of the variable name capitalized.

**Setters** start with set, followed by the variable name, with the first letter of the variable name capitalized.

Example:

`public class Internet {`

`    private String bossName;`

`    public void setBossName(String name){`

`        this.bossName= name;`

`    }`

`    public String getBossName(){`

`        return bossName;`

`    }     `

`}`

`public class NewClass {`

`    public static void main(String [ ]args){`

`        Internet v1 = new Internet();`

`        v1.setBossName("David Hamilton");`

`        System.out.println(v1.getBossName());`

`    }`

`}`
