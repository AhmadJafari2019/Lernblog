+++
title = "JavaScript Canvas Animation// Review the Lessons"
date = "2019-10-08"
draft = false
pinned = false
tags = ["JavaScript"]
image = "/img/j.png"
+++
**Canvas Animation**

`var c = canvas .getContext('2d');`

`function round(x, y, dx, dy, radiuse){`

`this.x = x;`

`this.y = y;`

`this.dx = dx;`

`this.dy= dy;`

`this.radiuse=radiuse;`

`this.draw = function(){`

`c.beginPath();`

`c.strokeStyle = "blue";`

`c.arc(this.x, this.y, this.radiuse, 0, Math.PI * 2, false);`

`c.stroke();`

`c.fill();`

`};`

`this.update = function(){`

`if(this.x + this.radiuse > innerWidth || this.x - this.radiuse < 0){`

`this.dx = -this.dx;`

`}`

`if(this.y + this.radiuse > innerHeight || this.y -this.radiuse < 0){`

`this.dy = -this.dy;`

`}`

`this.x += this.dx;`

`this.y +=this.dy;`

`this.draw();`

`}`

`}`

`var rundArray = [];`

`for(var i = 0; i < 100; i++){`

`var x = Math.random() * (innerWidth -radiuse * 2) + radiuse;`

`var y = Math.random() * (innerHeight -radiuse * 2 ) + radiuse;`

`var dx = Math.random() - 0.5 ;`

`var dy = Math.random() - 0.5;`

`var radiuse = 40;`

`rundArray.push(new round(x, y, dx, dy, radiuse));`

`}`

`function animate(){`

`requestAnimationFrame(animate);`

`c.clearRect(0, 0, innerWidth, innerHeight);`

`for(var i = 0; i < rundArray.length; i++){`

`rundArray[i].update();`

`}`

`}`

`animate();`

canvas is a very Amazing and Complex subject in javaScript.

![The image from the Canvas Animation.](/img/screen-shot-2019-10-08-at-14.42.41.png)
