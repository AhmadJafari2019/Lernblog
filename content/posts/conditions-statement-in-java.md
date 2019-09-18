+++
title = "Conditions statement in Java."
date = "2019-09-16"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
**Conditions**

Using the for loop in a conditions statement.

`public class Ahmad {`

`    public static void main(String [] args){`

`       int i = 12;`

`       String num = "HOWAREYOUMAN";`

`       if(i == 11.9){`

`           System.out.println("Yes");`

`       }else if(i== num.length()){`

`           System.out.println("The Condition is true.");`

`       }else{`

`           System.out.println("NO result");`

`       }`

`    }`

`}`

Using the switch method in a condition statement.

`public class Ahmad {`

`    public static void main(String [] args){`

`       String city = "California";`

`       switch(city){`

`           case"Bern":`

`               System.out.println("BERN");`

`               break;`

`           case"Berlin":`

`              System.out.println("BERLIN");`

`              break;`

`           case"California":`

`              System.out.println("CALIFORNIA");`

`              break;`

`           default:`

`              System.out.println("NOT MATCH");`

`             break;       }`

`    }`

`}`

**Array**

An array is a collection of variables of the same type. To declare an array, you need to define the type of the elements with square brackets.

For example, to declare an array of integers: int \[] arr;  The name of the array is arr. The type of elements it will hold is int.

int\[ ] arr = new int\[5];

The code above declares an array of 5 integers. In an array, the elements are ordered and each has a specific and constant position, which is called an index.

How to initialise an array?. 

`String[ ] myNames = { "A", "B", "C", "D"};`

`System.out.println(myNames[2]);      `// Outputs "C"

**Multidimensional Arrays**

Multidimensional arrays are array that contain other arrays. The two-dimensional array is the most basic multidimensional array. To create multidimensional arrays, place each array within its own set of square brackets.  int\[ ]\[ ] sample = { {1, 2, 3}, {4, 5, 6} }; 

How to access the Multidimensional Array?

`int x = sample[1][0];`

`System.out.println(x);    `// Outputs 4

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\**
