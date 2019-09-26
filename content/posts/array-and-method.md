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

`public static void main(String[] args) {`

\    //How to use array in a method.

\    `int arr[]={1, 2, 3, 4, 5};`

`change(arr);`

`for(int t : arr){`

`System.out.println(t);`

`}`

`}`

`public static void change(int x[]){`

`for(int y = 0; y<x.length; y++){`

`x[y] += 100;`

`}`

`}`

`}`

![The result from the last Example.](/img/screen-shot-2019-09-25-at-23.53.25.png)

How to work with the Multidimensional Array.

`public class NewClass {`

`    public static void main(String[] args) {`

`        //Multidimentional Array`

`        int firstArray[][] = {{1, 2, 3, 4}, {4, 3, 2, 1}};`

`        int secondArray[][] = {{7, 8, 9}, {10}, {90, 80, 70}};`

`        display(firstArray);`

`        display(secondArray);`

`    }`

` public static void display(int x[][]) {`

`        for (int row = 0; row < x.length; row++) {`

`            for (int column = 0; column < x[row].length; column++) {`

`                System.out.println(x[row][column]);`

`            }`

`            System.out.println();`

`        }`

`    }`

`}`

**How to set the Time in Java.**

`public class TimeClass {`

`    private int hour;`

`    private int minute;`

`    private int second;`

`    public void setTime(int h, int m, int s) {`

`        hour = h >= 0 && h < 24 ? h : 0;`

`        minute = m >= 0 && m < 60 ? m : 0;`

`        second = s >= 0 && s < 60 ? s : 0;`

`    }`

`    public String toMilitary() {`

`        return String.format("%02d: %02d: %02d", hour, minute, second);`

`    }`

`    public String toString() {`

`        return String.format("%d: %02d: %02d: %s", ((hour == 0 || hour == 12) ? 12 : hour % 12), minute, second, (hour < 12 ? "AM" : "PM"));`

`    }`

`}`

I have defined the Methods in the TimeClass and  i call them in the Ahmad Class in the main Method.

`class Ahmad {`

`    public static void main(String[] args) {`

`        TimeClass object = new TimeClass();`

`        System.out.println(object.toMilitary());`

`        object.setTime(10, 3, 0);`

`        System.out.println(object.toMilitary());`

`        System.out.println(object.toString());  `

`    }`

`}`

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
