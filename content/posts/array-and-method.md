+++
title = "Array and Method"
date = "2019-09-23"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
description = "How to use an array in a method."
+++
Array and Method.

Example:



`public class NewClass {`

`    public static void main(String[] args) {`

\    //How to use array in a method.

\    ` int arr[]={1, 2, 3, 4, 5};`

`       change(arr);`

`       for(int t : arr){`

`           System.out.println(t);`

`       }`

`    }`

`    public static void change(int x[]){`

`        for(int y = 0; y<x.length; y++){`

`            x[y] += 100;`

`        }`

`    }`

`}`

![The result from the last Example.](/img/screen-shot-2019-09-25-at-23.53.25.png)
