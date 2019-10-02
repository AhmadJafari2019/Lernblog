+++
title = "Choosing Color in Java"
date = "2019-10-02"
draft = false
pinned = false
tags = ["Java"]
image = "/img/java.jpg"
description = "How to choose the color in Java?"
+++
**Java and the Color**

`package IntermediateJava;`

`import java.awt.*;`

`import java.awt.event.*;`

`import javax.swing.*;`

`public class Graphic extends JFrame {  `

`   private JButton b;`

`   private Color color = (Color.WHITE);`

`   private JPanel panel;`

`    public Graphic() {`

`        super("The Title");`

`        panel =  new JPanel();`

`        panel.setBackground(color);        `

`        b = new JButton("Please choose the color");`

`        b.addActionListener(`

`                new ActionListener() {`

`            @Override`

`            public void actionPerformed(ActionEvent e) {`

`                color = JColorChooser.showDialog(null, "Please choose", color);`

`                if(color == null)`

`                    color = Color.WHITE;`

`                panel.setBackground(color);`

`            }`

`        }`

`        );`

`        add(panel, BorderLayout.CENTER);`

`        add(b, BorderLayout.SOUTH);`

`        setSize(500, 200);`

`        setVisible(true); `

`    }`

`   }`

Call the function in the main Method.

`package IntermediateJava;`

`import javax.swing.*;`

`public class Test {`

`    public static void main(String[] args) {`

`        Graphic n = new Graphic();`

`        n.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`

`    }`

`}`

![The image for the JFrame and the Button action.](/img/screen-shot-2019-10-02-at-16.57.50.png)

![The Colorpicker after Button action performed.](/img/screen-shot-2019-10-02-at-16.58.11.png)
