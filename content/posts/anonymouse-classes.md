+++
title = "Anonymouse classes"
date = "2019-09-24"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
+++
**Anonymous Classes**

Anonymous classes are a way to extend the existing classes on the fly. 

`class Machine {`

`    public void start() {`

`        System.out.println("Starting...");`

`    }`

`}`

`class Program {`

`    public static void main(String[ ] args) {`

`        Machine m = new Machine() {`

`            @Override public void start() {`

`                System.out.println("Wooooo");`

`            }`

`        };`

`        m.start();`

`    }`

`} `          //outputs: wooooo .

When creating  the Machine object, we can change the start method on the fly. After the constructor call, we have opened the curly braces and have overridden the start method's implementation on the fly.
