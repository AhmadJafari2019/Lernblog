+++
title = "Java Increment and Decrement Operator Prefix and Postfix."
date = "2019-09-12"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
I**ncrement or Decrement** 

An increment or decrement operator provides a more convenient and compact way to increase or decrease the value of a variable by one. Example => int test = 12; ++test => 13; System.out.println (test) = 13.

Prefix and Postfix => This two forms both used in increment and decrement operator. 

In the Prefix increments the variable's value and uses the new value in the expression. 

Example: int test = 12;          int x = ++test;    // x =13.

Postfix: The variable's value is first used in the expression and is then increased. 

Example:    int x = 30;   int y = x++;  // y is 30

**String :** A String is an object that represents a sequence of characters.

For example, "Hello" is a string of 5 characters.

**String Concatenation**

The + (plus) operator between strings adds them together to make a new string. This process is called concatenation. The resulted string is the first string put together with the second string.

For example:  String firstName, lastName;

firstName = "David";

lastName = "Williams";

System.out.println("My name is " + firstName +" "+lastName);

\    // Prints: My name is David Williams

**Getting User Input**

Java provides many different method for user input, but the common method is the **Scanner** object and perhabs the easiest to implement. The syntax to import Scanner class =>  import java.utl.Scanner

The instance syntax for the Scanner class Object=> Scanner myVar = new Scanner(System.in);

How to implement a class in Java?.

`import java.util.Scanner;`

`class MyClass {`

`  public static void main(String[ ] args) {`

`    Scanner myVar = new Scanner(System.in);`

`    System.out.println(myVar.nextLine());        `

`  }`

`}`

The **Conditional statement** in Java is look like down.

`public class Program {`

`    public static void main(String[] args) {`

`        int age = 25;`

`        if(age > 0) {`

`            if(age > 16) {`

`                System.out.println("Welcome!");`

`            } else {`

`                System.out.println("Too Young");`

`            }`

`        } else {`

`            System.out.println("Error");`

`        }`

`    }`

`}`

**Logical Operators**

Logical operators are used to combine multiple conditions. 

`if (age > 18) {`

`   if (money > 500) {`

`      System.out.println("Welcome!");`

`   }`

`}`

If the age > 18 and the money > 500 the out put will be Welcome . But we can use a better way, with using the AND operator  &&.

`if (age > 18 && money > 500) {`

`   System.out.println("Welcome!");`

`}`

How we use the **NOT !** operator.

`int age = 25;`

`if(!(age > 18)) {`

`   System.out.println("Too Young");`

`} else {`

`   System.out.println("Welcome");`

`}`

`//Outputs "Welcome"`

int day = 3;

**The switch statement**

`switch(day) {`

`  case 1:`

`    System.out.println("Monday");`

`    break;`

`  case 2:`

`    System.out.println("Tuesday");`

`    break;`

`  case 3:`

`    System.out.println("Wednesday");`

`    break;`

`}`

// Outputs "Wednesday"
