+++
title = "GUI"
date = "2019-10-01"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
description = "How to Make a Graphic User Interface?"
+++
**GRAPHIC USER INTERFACE IN JAVA**

First of all i created the Package for my Class Test and Graphic(IntermidiateJava). and i extend the Graphic Class from the JPanel  override the paintComponent method and using the Graphics g parameter,  use Supper keyword to connect the Graphic class.  

`package IntermediateJava;`

`import java.awt.*;`

`import java.awt.event.*;`

`import javax.swing.*;`

`public class Graphic extends JPanel{  `

`   public void paintComponent(Graphics g){`

`             super.paintComponent(g);`

`       this.setBackground(Color.WHITE);`

`       g.setColor(Color.YELLOW);`

`       g.fillRect(30, 30, 200, 40);`

`       g.setColor(Color.GREEN);`

`       g.fillRect(30, 75, 200, 40);`

`       g.drawString("ILOVEYOU!", 30, 150);`

`   }`

`}`

In the main method created the JFrame f = new JFrame(); and make another object from Graphic class and append it to the JFrame.

`package IntermediateJava;`

`import javax.swing.*;`

`public class Test {`

`    public static void main(String[] args) {`

`      JFrame f = new JFrame();`

`     f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`

`     Graphic p = new Graphic();`

`     f.add(p);`

`     f.setSize(400, 200);`

`     f.setVisible(true);`

`    }    `

`}`

``
