+++
title = "JavaScript functionality ): The sidebar."
date = "2019-08-22"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
description = "How to make a sidebar with javaScript.\n"
footnotes = "I  am gonna make my life like a masterpiece with JavaScript."
+++
Today i want to work on a sidebar Menu with JavaScript.  

That is the aside tag which i defined in the HTML Page and i give it the className = "nav-sidebar and inside it exist an unordered list. And i have as also another div with btn-toggle-nav class. I used an image in the style for toggle. The function is like that as i click the toggle menu it will open the sidebar and show us the sidebar menu. 

`<!DOCTYPE html>`

`<html>`

`   <head>`

`    <title>Page Title</title>`

`   </head>`

`   <body>`

`      <div class="btn-toggle-nav" onclick="toggleNav()"></div>`

`      <aside class="nav-sidebar">`

`        <ul>`

`            <li><span href="#">Some Projekts</span></li>`

`            <li><a href="#">Making a Video Design</a></li>`

`            <li><a href="#">Arrange the Work time</a></li>`

`            <li><a href="#">Connenting to the Companies</a></li>`

`            <li><a href="#">Just register the Advertise</a></li>`

`        </ul>`

`    </aside>`

`   </body>`

`</html>`

The javaScript code for the sidebar are:

` let toggleNavStatus = false;`

`let toggleNav = function() {`

`    let getSidebar = document.querySelector(".nav-sidebar");`

`    let getSidebarUL = document.querySelector(".nav-sidebar ul");`

`    let getSidebarTitle = document.querySelector(".nav-sidebar span");`

`    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");`

`    if (toggleNavStatus === false) {`

`        getSidebarUL.style.visibility = "visible";`

`        getSidebar.style.width = "272px";`

`        getSidebarTitle.style.opacity = " 0.5";`

`        let arrayLength = getSidebarLinks.length;`

`        for (let i = 0; i < arrayLength; i++) {`

`            getSidebarLinks[i].style.opacity = "1"; }`

`        toggleNavStatus = true;`

`    } else if (toggleNavStatus === true) {`

`        getSidebar.style.width = "50px";`

`        getSidebarTitle.style.opacity = " 0.5";`

`        let arrayLength = getSidebarLinks.length;`

`        for (let i = 0; i < arrayLength; i++) {`

`            getSidebarLinks[i].style.opacity = "0";  }`

`        getSidebarUL.style.visibility = "hidden";`

`        toggleNavStatus = false;`

`    }`

`}`

![The sidebar menu](/img/screen-shot-2019-09-02-at-02.43.44.png)
