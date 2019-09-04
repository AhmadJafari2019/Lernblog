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

**Ascending and Descending in MySQL**. 

DESC : It sorts from up to down . Example =>SELECT name, zip FROM customers ORDER BY zip DESC;

It takes the name and zip from customers Table and ordered by zip from up to down.

![DESC Result](/img/screen-shot-2019-09-04-at-00.49.38.png)

ASC : It sorts from down to up. Example => SELECT name, zip FROM customers ORDER BY name ASC;

It takes the name and zip from customers Table and sorted by name from down to up.

![ASC Result](/img/screen-shot-2019-09-04-at-00.54.29.png)

**Another Example for Sorting Result =>** SELECT name, id FROM customers ORDER BY name DESC LIMIT 3;

It takes the name and id from the customers table and sorted by name from up to down (name from" z to  a " and number from big to small) for limit 3;

![The image of DESC LIMIT 3;](/img/screen-shot-2019-09-04-at-01.03.11.png)

**Filtering and the Order of WHERE and BETWEEN**

Example: SELECT id, name FROM customers WHERE id BETWEEN 25 AND 30 ORDER BY name;

It takes the id and name from customers table where the id is between 25 to 30 and sorted alphabetically.

![An image for filtering the Data ](/img/screen-shot-2019-09-04-at-02.30.07.png)

An another example of filtering with using : SELECT name, state, id  FROM customers WHERE state = 'CA' ORDER BY name, id;

It takes the name and state and id from the customers table where the state is equal to CA and sorted by name and id.

![Example for filtering ](/img/screen-shot-2019-09-04-at-02.37.19.png)
