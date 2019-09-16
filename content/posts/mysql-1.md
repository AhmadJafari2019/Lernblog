+++
title = "View and Report"
date = "2019-09-07"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
description = ""
+++
**Report and View**

How we can make  a Report in MySql?.

CREATE VIEW mostbids AS

SELECT id, name, state  AS new_Address FROM customers .

We write the Command line like top. We select the data that we want to report and give them a name but before the command line we create the view and give it a name, i called here mostbids. It will creates as a report file but the data which we change in the original file it will change Automatically in report file, if we change the data in the report file, its will not change the data in original file.

![The two View report which i made in MySQL.](/img/screen-shot-2019-09-16-at-13.13.12.png)

****
