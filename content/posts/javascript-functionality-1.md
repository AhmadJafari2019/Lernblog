+++
title = "JavaScript functionality ):"
date = "2019-08-23"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
description = "How to make a Menubar with JavaScript.\n"
footnotes = "I  am gonna make my life like a masterpiece with JavaScript."
+++
Today i will write another code for Menubar with JavaScript. I used a link tag with class menu-btn for the Menu and a div with a class of menu which exist inside it an unordered list.

`<!DOCTYPE html>`

`<html>`

` <head>`

`   <title>Page Title</title>`

` </head>`

` <body>`

`  <a class="menu-btn" href="#">Menu</a>`

`    <div class="menu">`

`        <ul>`

`            <li><a href="#">This is link 1</a></li>`

`            <li><a href="#">This is link 2</a></li>`

`            <li><a href="#">This is link 3</a></li>`

`            <li><a href="#">This is link 4</a></li>`

`            <li><a href="#">This is link 5</a></li>`

`        </ul>`

`    </div>`

` </body>`

`</html> `

The JavaScript Code for the Menu bar are:

`onload = () => {`

`    let menuBtn = document.querySelector(".menu-btn");`

`    let menu = document.querySelector(".menu");`

`    let menuStatus = false;`

`    menu.style.display = "none";`

`    function menuToggle() {`

`        if (menuStatus == true) {`

`            menu.style.display = "";`

`            menuStatus = false;`

`        } else if (menuStatus == false) {`

`            menu.style.display = "none";`

`            menuStatus = true;`

`        }}`

`    menuBtn.addEventListener("click", menuToggle);`

`}} `

That is the Pic of the Menubar.

![The Menubar](/img/screen-shot-2019-09-02-at-03.10.28.png)

In this two last days i work on functionality.  I create the date and Time function to print the date and time and two menubar, one in the right site and another in the left site of the Browser and as also i create a dropdown list with CSS, which i share the whole result of the Code by a picture from Browser.  

![The Pic of the two sidebar and Print time.](/img/screen-shot-2019-09-02-at-03.19.34.png)
