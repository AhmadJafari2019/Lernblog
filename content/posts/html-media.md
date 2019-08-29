+++
title = "HTML Media"
date = "2019-08-14"
draft = false
pinned = false
tags = ["HTML Media"]
image = "/img/2.jpg"
description = "Multimedia on the web is sound, music, videos, movies, and animations."
+++
# Multimedia

Multimedia comes in many different formats. It can be almost anything you can hear or see(Images, music, sound, videos, records, films, animations.....). Web pages often contain multimedia elements of different types and formats.

## Formats

Multimedia elements (like audio or video) are stored in media files. The most common way to discover the type of a file, is to look at the file extension. Multimedia files have formats and different extensions like: .swf, .wav, .mp3, .mp4, .mpg, .wmv.

* ## Playing Videos in HTML

`<video width="320" height="240" controls>`

`  <source src="movie.mp4" type="video/mp4">`

`  <source src="movie.ogg" type="video/ogg">`

`</video>`

## How does it work?.

The controls attribute adds video controls, like play, pause, and volume. It is a good idea to always include width and height attributes. If height and width are not set, the page might flicker while the video loads. The <source> element allows you to specify alternative video files which the browser may choose from. The browser will use the first recognized format. The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element.

* ## Audio :

Before HTML5, audio files could only be played in a browser with a plug-in (like flash). The HTML5 <audio> element specifies a standard way to embed audio in a web page.

`<audio controls>`

`  <source src="horse.ogg" type="audio/ogg">`

`  <source src="horse.mp3" type="audio/mpeg">`

`Your browser does not support the audio element.`

`</audio>`

## `How is work?`

The controls attribute adds audio controls, like play, pause, and volume. The <source> element allows you to specify alternative audio files which the browser may choose from. The browser will use the first recognized format. The text between the <audio> and </audio> tags will only be displayed in browsers that do not support the <audio> element.

* ## HTML Helpers (Plug-ins):

Helper applications (plug-ins) are computer programs that extend the standard functionality of a web browser. Examples of well-known plug-ins are Java applets. Plug-ins can be added to web pages with the <object> tag or the <embed> tag. Plug-ins can be used for many purposes: display maps, scan for viruses, verify your bank id.

* ## HTML YouTube Videos:
  To play your video on a web page, do the following:
  Upload the video to YouTube
  Take a note of the video id.
  Define an <iframe> element in your web page
  Let the src attribute point to the video URL
  Use the width and height attributes to specify the dimension of the player
  Add any other parameters to the URL (see below).

`<iframe width="420" height="345" src="https://youtu.be/IKuz7vA30sI">`

`</iframe>`

That was the  subject for Today.

![Graphic canvas Pic](/img/screen-shot-2019-08-29-at-15.05.59.png)
