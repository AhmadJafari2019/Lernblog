+++
title = "LOOP"
date = "2019-09-14"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
description = "That is the basic Java Programm"
+++
**LOOPS**

**While:** A while loop statement repeatedly executes a target statement as long as a given condition is true.

`int x = 6;`

`while( x < 10 )`

`{`

`  System.out.println(x);`

`  x++;`

`}`

`System.out.println("Loop ended");`

/\* 6 , 7, 8, 9 Loop ended\*/

**For LOOPS**

A for loop allows you to efficiently write a loop that needs to execute a specific number of times. And has 3 part(1. initialiser, conditions, increment or decrement.).

Example: `for(int x=0; x<=10; x=x+2) {`

`  System.out.println(x);`

`}`

/\* 0, 2, 4, 6, 8, 10 \*/

**do...while Loops**

A do...while loop is similar to a while loop, except that a do...while loop is guaranteed to execute at least one time. Here i test the Continue statement which change the execution of the loop flow.

`for(int x=10; x<=40; x=x+10) {`

`  if(x == 30) {`

`    continue;`

`  }`

`  System.out.println(x);`

`}`

/\* Outputs . 10, 20,  40, \*/
