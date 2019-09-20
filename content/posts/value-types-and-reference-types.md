+++
title = "Value Types and Reference Types"
date = "2019-09-19"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
**Reference Types**

Before i begin to study about the Reference Type i want to solve a task.

Task: With  the following info calculate how many Subscribes your Chanel.

// Amount = The whole of Subscriber that you will get day by day(amount = Math.pow(1 + rate+ amount);

// Principal = The current Subscriber that you have.

// Rate = The rate of Subscriber.

`class Ahmad {`

`    public static void main(String []args){`

`    int day = 1;`

`    double amount;`

`    double principal = 0;`

`    double rate = 0.1;    `

`    for(; day <=10; day++){`

`        amount = principal + Math.pow(1 + rate, day);`

`        System.out.println( "In "+day + " day/days you earn " + amount + " Subscriber");`

`    }      `

`    }`

`}`

**Result.**

In 1 day/days you earn 1.1 Subscriber

In 2 day/days you earn 1.2100000000000002 Subscriber

In 3 day/days you earn 1.3310000000000004 Subscriber

In 4 day/days you earn 1.4641000000000004 Subscriber

In 5 day/days you earn 1.6105100000000006 Subscriber

In 6 day/days you earn 1.7715610000000008 Subscriber

In 7 day/days you earn 1.9487171000000012 Subscriber

In 8 day/days you earn 2.1435888100000016 Subscriber

In 9 day/days you earn 2.357947691000002 Subscriber

In 10 day/days you earn 2.5937424601000023 Subscriber

**Value Types**

Value types are the basic types, and include byte, short, int, long, float, double, boolean, and char.

These data types store the values assigned to them in the corresponding memory locations

`public class MyClass {`

`  public static void main(String[ ] args) {`

`    int x = 5;`

`    addOneTo(x);`

`    System.out.println(x);       `

`  }`

`  static void addOneTo(int num) {`

`    num = num + 1;`

`  }`

`}` .      // Outputs "5"

The method from the example above takes the value of its parameter, which is why the original variable is not affected and 5 remains as its value.

**Reference type.**

A reference type stores a reference (or address) to the memory location where the corresponding data is stored. When you create an object using the constructor, you create a reference variable.

`public class MyClass {`

`    public static void main(String[ ] args) {`

`        Person j;`

`        j = new Person("John");`

`        j.setAge(20);`

`        celebrateBirthday(j);`

`        System.out.println(j.getAge());`

`  } `

`    static void celebrateBirthday(Person p) {`

`        p.setAge(p.getAge() + 1);`

`    }`

`}`

`public class Person {`

`    private String name;`

`    private int age;    `

`    Person (String n) {`

`        this.name = n;`

`    }`

`     public int getAge() {`

`        return age;`

`    }`

`    public void setAge(int a) {`

`        this.age = a;`

`    }`

`}`
