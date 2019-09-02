+++
title = "JavaScript functionality ):"
date = "2019-08-19"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
description = "How to Print the Date and Time in Browser with js Code."
footnotes = "I  am gonna make my life like a masterpiece with JavaScript."
+++
Today i want to study about the date and time and write  a function to print the Date and time in the Browser.

That is the basic HTML code which i add just the "p" tag and give it the id to use it for my function in the js file.

`<!DOCTYPE html>`

`<html>`

`  <head>`

`   <title>Page Title</title>`

`  </head>`

`  <body>`

`   <p id="tim"></p>`

`  </body>`

`</html>`

` onload = () => {`

`    let timing = document.getElementById("tim");`

`    function now() {`

`        var date = new Date();`

`        let year = date.getFullYear();`

`        let month = date.getMonth() + 1;`

`        let day = date.getDate();`

`        let hour = date.getHours();`

`        let min = date.getMinutes();`

`        let sec = date.getSeconds();`

`        timing.innerHTML = day + "/" + month + "/" + year + " " + "**" + " " + hour + ":" + min + ":" + sec;}`

`    setInterval(now);`

Here i used the onload event which occurs after the object has loaded, and i called the paragraph  with defining the variable of timing. I write the function of now() to access the date and time. At the end i used the setInterval() method to call the function. The result will be in the browser like : 19/08/2019 \*\* 17:40:25
