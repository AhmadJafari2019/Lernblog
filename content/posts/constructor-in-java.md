+++
title = "Constructor in Java"
date = "2019-09-18"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
**Constructor**

**Constructors** are special methods invoked when an object is created and are used to initialize them.

A constructor can be used to provide initial values for object attributes.

**\- A constructor** name must be same as its class name.

**\- A constructor** must have no explicit return type.

**Example:**

`public class Car {`

`    private String color;`

`    Car() {`

`        this.setColor("Red");`

`    }`

`    Car(String c) {`

`        this.setColor(c);`

`    }`

`    // Setter`

`    public void setColor(String c) {`

`        this.color = c;`

`    }`

`    // Getter`

`    public String getColor() {`

`        return color;`

`    }`

`}`

`public class Program {`

`    public static void main(String[] args) {        `

`        //color will be "Red"`

`        Car v1 = new Car();        `

`        //color will be "Green"`

`        Car v2 = new Car("Green"); `

`        System.out.println(v2.getColor());`

`    }`

`}`

How to get average of 10 numbers in Java:

`import java.util.Scanner;`

`class Ahmad {`

`    public static void main(String []args){`

`        Scanner input = new Scanner(System.in);`

`        int total = 0;`

`        int grade;`

`        int average;`

`        int counter = 0;`

`        System.out.println("Please enter 10 numbers .");`

`        for(counter = 0; counter < 10; counter++){`

`            grade = input.nextInt();`

`            total = total + grade;   `

`        }`

`          average = total/10;`

`            System.out.println("Your average is " + average);     `

`    }`

`} .     //result: after entering 10 numbers in the input the average result will i received is 5 `
