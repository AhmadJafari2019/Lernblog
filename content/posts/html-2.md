+++
title = "HTML Graphics"
date = "2019-08-14"
draft = false
pinned = false
tags = ["HTML"]
image = "/img/2.jpg"
description = "HTML Graphics =>\nHTML Canvas\nHTML SVG"
+++
HTML CANVAS:

What is HTML Canvas?

The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript. The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images. The HTML <canvas> element is used to draw graphics on a web page. The graphic picture down is created with <canvas>. It shows four elements: a red rectangle, a gradient rectangle, a multicolor rectangle, and a multicolor text. 

![Graphic canvas Pic](/img/screen-shot-2019-08-29-at-15.05.59.png)

I want to share another Code how i format with canvas tag the Word.<html>

<body>

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">Your browser does not support the HTML5 canvas tag.</canvas><script>

var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

ctx.font = "30px Arial";

ctx.strokeText("Hello World",10,50);

</script>

</body>

</html

![](/img/screen-shot-2019-08-29-at-15.16.50.png)

# What is SVG?

SVG stands for Scalable Vector Graphics. SVG is used to define graphics for the Web. 

The HTML <svg> element is a container for SVG graphics. SVG has several methods for drawing paths, boxes, circles, text, and graphic images.

An example of SVG with picture: 

`<!DOCTYPE html>`

`<html>`

`<body>`

`<svg width="300" height="200">`

`  <polygon points="100,10 40,198 190,78 10,78 160,198"`

`  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />`

`</svg>`

` </body>`

`</html>`

![](/img/screen-shot-2019-08-29-at-15.22.32.png)

``
