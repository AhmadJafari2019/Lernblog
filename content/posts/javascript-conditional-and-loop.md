+++
title = "# JavaScript Conditional and Loop# "
date = "2019-08-17"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
description = "JavaScript is a server-side language."
+++
# JavaScript

Is one of the most popular programming languages on earth and is used to add interactivity to webpages, process data, as well as create various applications (mobile apps, desktop apps, games, and more).

I want to attend today for the **Conditional** and **Loop** .

## The if Statement

With **if** statement we specify a block of code, if the condition is true, the statement will be executed.

## The else Statement

The **else** statement specify a block of code that will execute if the condition is false.

## The else if statement

The **else if** statement to specify a new condition if the first condition is false.

**Example:**

```
let course = 1;   if (course == 1) {document.write("<h1>HTML Tutorial</h1>");}else if (course == 2{document.write("<h1>CSS Tutorial</h1>");}else {document.write("<h1>JavaScript Tutorial</h1>");}
```

## The Switch statement

The switch statement is used to perform different actions based on different conditions.

`let day = 2;`\
`switch (day) { `\
` case 1: `\
` document.write("Monday"); `\
` break;`\
` case 2: `\
` document.write("Tuesday")`\
` break;`\
` case 3: `\
` document.write("Wednesday");`\
` break;`\
` default: `\
` document.write("Another day");`\
`} // Outputs "Tuesday"`

The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.

## Loops

Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time. JavaScript has: **for**, **while**, and **do while** LOOPS.

for (statement 1; statement 2; statement 3) {

   //code

}

Statement 1 is executed before the loop (the code block) starts.

Statement 2 defines the condition for running the loop (the code block).

Statement 3 is executed each time after the loop (the code block) has been executed.

```
let arr = [1, 2, 3];for (let k = 0; k < arr.length; k++) {  console.log(arr[k]);}
```

The **for**...**in** loop is intended for iterating over the enumerable keys of an object.

```
let obj = {a: 1, b: 2, c: 3};for (let v in obj) { console.log(v);}// result = a, b , c                                         
```
