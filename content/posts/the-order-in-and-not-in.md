+++
title = "The Order IN and NOT IN "
date = "2019-09-04"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
+++
**The Order IN and NOT IN** 

SELECT id, name, state FROM customers WHERE state IN ('CA', 'FL', 'NY');

This will select the Data from id, name ,state columns where the state are : 'CA', 'FL', 'NY'.

![The result image from the IN Order](/img/screen-shot-2019-09-04-at-14.42.00.png)

SELECT id, name, state FROM customers WHERE state NOT IN('CA', 'FL', 'NY');

It will select the id, name, state from customers table where the state are not 'CA', 'FL', 'NY'.

![The result with NOT IN Order.](/img/screen-shot-2019-09-04-at-14.42.57.png)

## Search in MySQL

SELECT name FROM items WHERE name LIKE 'new%';

It selects the names from items table where names are begin with new und after can everything be. The Percentage means everything after new. The image result of the query command i share it down.

![The result with LIKE 'new%'](/img/screen-shot-2019-09-04-at-18.19.23.png)

Another Example of the filtering and searching the Data from the Database.

**Query command:** SELECT name FROM items WHERE name LIKE '%computer%';

It selects the name from the items table where the name like computer exist.

![The LIKE '%computer%' example.](/img/screen-shot-2019-09-05-at-03.22.16.png)

SELECT id, city, address FROM customers WHERE city LIKE 'h%d';

It selects the id, city and the address from customers table where the city begin with h and end with d.

![The result WHERE city LIKE 'h%d';](/img/screen-shot-2019-09-05-at-03.29.30.png)

**More About the searching**

SELECT name FROM items WHERE name LIKE '_ boxes of frogs';

It selects the name from items table. I used the under score for that, it should be space between names and under score and under score is only for single character but % Percentage is for everything. The results for both i share down.

![The image with using the under score ](/img/screen-shot-2019-09-05-at-03.53.45.png)

![The image from the result of Percentage. It includes everything. ](/img/screen-shot-2019-09-05-at-03.54.46.png)
