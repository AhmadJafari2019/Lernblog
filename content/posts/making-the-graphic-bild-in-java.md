+++
title = "Making the Graphic bild in Java"
date = "2019-10-03"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
description = "drawLine, drawRect, draw3DRect"
+++
The Graphic class for implementing the Bild.

`package IntermediateJava;`

`import java.awt.*;`

`import java.awt.event.*;`

`import javax.swing.*;`

`public class Graphic extends JPanel {`

`    public void paintComponent(Graphics g){`

`        super.paintComponents(g);`

`        this.setBackground(Color.WHITE);`

`        g.setColor(Color.BLUE);`

`        g.drawLine(10, 25, 200, 45);    `

`        g.setColor(Color.red);`

`        g.drawRect(10, 55, 100, 30);  `

`        g.setColor(Color.GREEN);`

`        g.drawOval(10, 95, 100, 30);   `

`        g.setColor(Color.ORANGE);`

`        g.fill3DRect(10, 150, 100, 50, true);`

`        g.drawString("ILOVEYOU", 20, 250);`

`    }`

`}`

The Test class for calling the Graphic class.

`package IntermediateJava;`

`import java.awt.Color;`

`import javax.swing.*;`

`public class Test {`

`    public static void main(String[] args) {`

`        JFrame f = new JFrame("Shiklha");`

`        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`

`        Graphic n = new Graphic();`

`        n.setBackground(Color.WHITE);`

`        f.setSize(500, 300);`

`        f.add(n); `

`        f.setVisible(true);`

`    }`

`}`

![The Graphics images](/img/screen-shot-2019-10-03-at-14.53.23.png)
