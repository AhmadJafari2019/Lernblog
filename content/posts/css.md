+++
title = "CSS "
date = "2019-08-15"
draft = false
pinned = false
tags = ["2. CSS"]
image = "/img/111.png"
description = "What is CSS?\n"
+++
# CSS

*  stands for Cascading Style Sheets.
* \- Cascading refers to the way CSS applies one style on top of another.
* \- Style Sheets control the look and feel of web documents.
* CSS and HTML work hand in hand:
* \- HTML sorts out the page structure.
* \- CSS defines how HTML elements are displayed. That is an Example of CSS.

![](/img/screen-shot-2019-08-29-at-15.54.02.png)

_Today i will learn about the CSS Animation\*\*._

_An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times you want. To use CSS animation, you must first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times._

* _@keyframes => defining a keyframe changes the style from one to other in a specific duration._
* _animation-name => To get an animation to work, you must bind the animation to an element._
* _animation-duration =>defines how long time an animation should take to complete. If the animation-duration is not specified, no animation will occur, because the default value is 0 seconds._ 
* _animation-delay=> The animation-delay property specifies a delay for the start of an animation._
* _animation-iteration-count=>The animation-iteration-count property specifies the number of times an animation should run._ 
* _animation-direction =>_ 
  * _normal - The animation is played as normal (forwards). This is default_
  * _reverse - The animation is played in reverse direction (backwards)_
  * _alternate - The animation is played forwards first, then backwards_
  * _alternate-reverse - The animation is played backwards first, then forwards_
* _animation-timing-function=>The animation-timing-function property specifies the speed curve of the animation._
  * _ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)_
  * _linear - Specifies an animation with the same speed from start to end_
  * _ease-in - Specifies an animation with a slow start_
  * _ease-out - Specifies an animation with a slow end_
  * _ease-in-out - Specifies an animation with a slow start and end_
  * _cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function_
* _animation-fill-mode=>The animation-fill-mode property specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both like none, forwards, backwards, both)._
* _animation.=>The same animation effect as above can be achieved by using the shorthand animation property: div { animation: example 5s linear 2s infinite alternate;}_

Example:

![](/img/screen-shot-2019-08-29-at-16.31.06.png "Animation Picture")

__
