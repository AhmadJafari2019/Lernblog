+++
title = "# JavaScript Conditional and Loop# "
date = "2019-08-17"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
description = "JavaScript is a server-side language."
footnotes = ""
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
`switch (day) {`\
`case 1:`\
`document.write("Monday");`\
`break;`\
`case 2:`\
`document.write("Tuesday")`\
`break;`\
`case 3:`\
`document.write("Wednesday");`\
`break;`\
`default:`\
`document.write("Another day");`\
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

The **for...of** loop, which creates a loop iterating over iterable objects.

Example : `let list = ["x", "y", "z"];`

`for (let val of list) { console.log(val);} .   // result in console will be x y z`

The for ... of loop works as also for string . 

`for (let ch of "Hello") {console.log(ch);}   (//result in console will be: H . e l l o) `

# Function

In JavaScript we define the Function like that: 

function myFunction (parameter){// code ;}

Or we can define it like an arrow function in ESC6, which is quite handy and don't need to write the function keyword and return statement:

`const add = (x, y) => {let sum = x + y;  console.log(sum);}`

**Default Parameters in ES6**

In ES6 we can put the default value in the signature of the function. 

Example: `function test(a, b = 3, c = 42) {return a + b + c;}console.log(test(5)); //50`

An Arrow function from the last Example. `const test = (a, b = 3, c = 42) => {return a + b + c;}console.log(test(5)); //50 `

**Objects**

JavaScript variables are Object data types that contain many values called properties. 

An object can also have properties that are function definitions called methods for performing actions on the object. 

The Object Method does not require the colon (:) or function keyword, as in the grow function of the tree object declaration:

`let tree = { `

`height: 10, `

` color: 'green', `

` grow() { this.height += 2;  }};`

`tree.grow();`

`console.log(tree.height); // 12`

**Object.assign() in ES6**

We use the Method Object.assign() to combine multiple source into one target to create one single object. With this Method we can duplicate the current Object. 

Example : 

`let person = {name: 'Jack',    age: 18,    sex: 'male'};`

`let student = {    name: 'Bob',    age: 20,    xp: '2'};`

`let newStudent = Object.assign({}, person, student);`

`console.log(newStudent.name); // Bob`

`console.log(newStudent.age); // 20`

`console.log(newStudent.sex); // male`

`console.log(newStudent.xp); // 2 .   `

The first parameter is the target object that apply new properties to and the rest are the source that we use for the target.

We can use the Object.assign() to create a duplicate object without assigning to the first object.

First Object()with assigning to a reference.

`let person = {`

`  name: 'Jack',`

`  age: 18};    `

`let newPerson = person; //  newPerson references person`

`newPerson.name = 'Bob'; `

`console.log(person.name); // Bob`

`console.log(newPerson.name); // Bob  `

Second object() without assigning to the reference Object().

`let person = {`

`  name: 'Jack',`

`  age: 18};`

`let newPerson = Object.assign({}, person); `

`newPerson.name = 'Bob';`

`console.log(person.name); // Jack`

`console.log(newPerson.name); // Bob`
