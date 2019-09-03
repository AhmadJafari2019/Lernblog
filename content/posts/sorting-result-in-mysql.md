+++
title = "Sorting Result in MySQL"
date = "2019-09-03"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
description = "SQL is a standard language for storing, manipulating and retrieving data in databases."
+++
## SORTING THE RESULT IN SQL

The **ORDER BY** keyword is used to sort the result-set in ascending or descending order.

Example : SELECT id, name, address, state FROM customers ORDER BY name, id;

It will takes the name and id, address and the state column from the customers Table and sort it first by the  name base on Alphabetically and after by id . 

![The customers Table selected via this query: SELECT id, name, address, state FROM customers ORDER BY name, id;](/img/screen-shot-2019-09-04-at-00.35.23.png)
