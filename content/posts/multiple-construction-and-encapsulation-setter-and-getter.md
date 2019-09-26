+++
title = "Multiple Construction and Encapsulation Setter and Getter"
date = "2019-09-25"
draft = false
pinned = false
tags = ["java"]
image = "/img/java.jpg"
description = "Constructors take the same name as its class name."
+++
How to make a Constructor and How to set a Setter and  a Getter 

`public class TimeClass {`

`   private int hour;`

`    private int minute;`

`    private int second;`

`public TimeClass(){`

`    this(0, 0, 0);`

`}`

`public TimeClass(int h){`

`    this(h, 0, 0);`

`}`

`public TimeClass(int h, int m){`

`    this(h, m, 0);`

`}`

`public TimeClass(int h, int m, int s){`

`    setTime(h, m, s);`

`}`

`    private void setTime(int h, int m, int s) {`

`        setHour(h);`

`        setMinute(m);`

`        setSecond(s);`

`    }`

`    private void setHour(int h) {`

`        hour = h >= 0 && h < 24 ? h : 0;`

`    }`

`    private void setMinute(int m) {`

`        minute = m >= 0 && m < 60 ? m : 0;`

`    }`

`    private void setSecond(int s) {`

`        second = s >= 0 && s < 60 ? s : 0;    }`

`    public int getHour() {`

`        return hour;`

`    }`

`    public int getMinute() {`

`        return minute;`

`    }`

`    public int getSecond() {`

`        return second;`

`    }`

`    public String toMilitary() {`

`        return String.format("%02d: %02d: %02d", getHour(), getMinute(), getSecond());`

`    }`

`    public String toString() {`

`        return String.format("%d: %02d: %02d: %s", ((hour == 0 || hour == 12) ? 12 : hour % 12), minute, second, (hour < 12 ? "AM" : "PM"));`

`    }`

`}`

Its time to call the method from the top class in the main Method in Ahmads class.

`class Ahmad {`

`    public static void main(String[] args) {`

`        TimeClass object = new TimeClass();`

`        TimeClass object1 = new TimeClass(5);`

`        TimeClass object2 = new TimeClass(12, 5);`

`        TimeClass object3 = new TimeClass(13, 14, 50);`

`        System.out.println(object.toMilitary());`

`        System.out.println(object1.toMilitary());`

`        System.out.println(object2.toMilitary());`

`        System.out.println(object3.toMilitary());`

`    }`

`}`
