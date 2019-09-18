+++
title = "The Variables types of Java"
date = "2019-09-15"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
description = ""
+++
**Variables types** => Today i want to define different type of the Variable inside a class.

`public class Ahmad {`

`public static void main(String [] args){`

`String name = "Divad";`

`int num = 100;`

`double d = 20.1;`

`byte b = 127;`

`long l = 67615457265325572L;`

`boolean bo = true;`

`short sh = 32767;`

`float f = 24234.5f;`

`char ch = 'f';`

`System.out.println(ch);`

`}`

`} .  // result is: f`

How to convert the Variables:

`public class Ahmad {`

`public static void main(String [] args){`

`int i = 120;`

`double d = 120;`

`int e = (int)d;`

`int num = 128;`

`byte b = (byte)num;`

`System.out.println(d);`

`System.out.println(e);`

`System.out.println(b);`

`}`

`}`

Result = > d=120.0; e =120; b = -128;

**Getting Data from User.**

`Example:`

`import java.util.Scanner;`

`public class Ahmad {`

`public static void main(String [] args){`

`System.out.println("type data in the input");`

`Scanner ahmad = new Scanner(System.in);`

`System.out.println(ahmad.nextLine());`

`}`

`}`

We import the Scanner Library to use it inside our class. Inside our class we use the Scanner and give it a name( Scanner ahmad = new Scanner(System.in);). The System in is a keyboard. Then we print the ahmad in the next line but still is not possible to write in the input till we type before the        System.out.println("type data in the input");.

**A basic calculator in Java**

I want to write a calculator which calculate two numbers.

`import java.util.Scanner;`

`public class Ahmad {`

`public static void main(String [] args){`

`Scanner ahmad = new Scanner(System.in);`

`double fnum, snum, answer;`

`System.out.println("Enter the first number");`

`fnum = ahmad.nextDouble();`

`System.out.println("Enter the Second number");`

`snum = ahmad.nextDouble();`

`answer = fnum * snum;`

`System.out.println(answer);`

`}`

`}`

I import the Scanner Library which i used it inside of the class. I defined three variable which are fnum, snum, answer. The command  System.out.println("Enter the first number"); will order to user to enter the first  number and in continue the second number and after the answer variable gather the both two first variable and at the end the System.out.println(answer) print the answer result.
