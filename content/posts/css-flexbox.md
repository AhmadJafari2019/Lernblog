+++
title = "CSS Flexbox"
date = "2019-08-16"
draft = false
pinned = false
tags = ["CSS"]
image = "/img/111.png"
description = "# FlexBox  # Makes the design easier and responsive without using position and float."
+++
# FlexBox Elements

To start using the Flexbox model, we need to first define a flex container.

## Parent Element (Container)

The flex container becomes flexible by setting the display to flex.

## The flex container properties are:

**flex-direction** => Defines in which direction the container wants to stack the flex items :(1. column 2. column-reverse 3.row 4.row-reverse)

* **flex-wrap** =>Specifies the flex items should wrap or not. The Properties are (1. wrap 2. nowrap 3.wrap-reverse 4. row wrap)
* **flex-flow** => Is a shorthand property for setting both the flex-direction and flex-wrap properties like : flex-flow: row wrap;)
* **justify-content** => It used to align the flex items. The justify-content property are (1. center 2.flex-start 3. flex-end 4.space-around 5.space-between)
* **align-items** => Is used to align the flex items vertically. The properties are(1.center 2.flex-start 3. flex-end  4. stretch 5.baseline).
* **align-content** => Is used to align the flex line. The properties are:(1. space-between 2. space-around 3. stretch 4. center 5. flex-start 6.flex-end).

**Some other Properties for Flex items.**

* order => Specifies the order of the flex items, which flex item can be the first, the second and so on. The order value must be a number.
* flex-grow=> Specifies how much a flex item will grow relative to the rest of the flex items. The value is a number.
* flex-shrink => Specifies how much a flex item will shrink relative to the rest of the flex items. Value is a number and default value is one.
* flex-basis = > Specifies the initial length of a flex item(one of the child element <div style="flex-basis: 200px">3</div>)
* flex => Is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties(one of the child element <div style="flex: 0 0 200px">3</div>)
* align-self =>Specifies the alignment for the selected item inside the flexible container. 

![The CSS Picture.](/img/screen-shot-2019-08-30-at-01.25.50.png)

![The BOX from two Code.](/img/screen-shot-2019-08-30-at-01.27.08.png)

Example for FlexBox:

![The HTML Picture](/img/screen-shot-2019-08-30-at-01.26.37.png)
