+++
title = "Array Destructuring and Rest... Spread Parameters."
date = "2019-08-18"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
description = "The Destructuring an Array is quite easy and useful."
footnotes = "I have to learn more about ES6 .):"
+++
## Array Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 

How to unpack the elements of an array into distinct variables:

`let arr = ['1', '2', '3'];`

`let [one, two, three] = arr;`

`console.log(one); // 1`

`console.log(two); // 2`

`console.log(three); // 3`

##  Rest Parameters

If i wanted to pass a Variable number of arguments to a function, i could use the arguments of object, an array like object to access the parameters passed to the function. To understand better that, i would like to make an Example:

`function containsAll(arr) {`

`  for (let k = 1; k < arguments.length; k++) {`

`    let num = arguments[k];`

`    if (arr.indexOf(num) === -1) {`

`      return false;`

`    }`

`  }`

`  return true;`

`}`

`let x = [2, 4, 6, 7];`

`console.log(containsAll(x, 2, 4, 7));`

`console.log(containsAll(x, 6, 4, 9));`

But i can use  from the spread operator to make the code more readable and achieve  the variable number of parameters by using a rest parameter:

`function containsAll(arr, ...nums) {`

`    for (let num of nums) {`

`        if (arr.indexOf(num) === -1) {`

`            return false;`

`        }`

`    }`

`    return true;`

`}`

`let x = [2, 4, 6, 7];`

`console.log(containsAll(x, 2, 4, 7)); // true`

`console.log(containsAll(x, 6, 4, 9));// false`
