+++
title = "MySQL"
date = "2019-09-08"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
description = "The relationship between tables"
+++
**The relationship between tables**

SELECT customers.id, customers.name, items.cost, items.name FROM items, customers

WHERE customers.id = seller_id

ORDER BY customers.id

It choose the customers id and customers name from customers table and cost and name from items table and match the id with the seller_id if they are equal, it will order by customers id.

![The result of relation between 2 tables](/img/screen-shot-2019-09-09-at-13.15.16.png)

Another Example of the relation between tables.

SELECT i.seller_id, i.name, c.id 

FROM customers AS c, items AS i

WHERE seller_id = c.id

![The relationship  between 2 tables](/img/screen-shot-2019-09-09-at-13.56.53.png)

**The OUTER JOIN order in MySQL**

SELECT customers.name, items.name From customers

LEFT OUTER JOIN items ON seller_id = customers.id

The Command choose the names from two tables and join it together according to  seller_id = customers.id.

![The result with using the LETFT OUTER JOIN ON](/img/screen-shot-2019-09-09-at-14.15.03.png)

**UNION in MySQL**

When we want to join two order together, we use the UNION command.

SELECT name, cost, bids FROM items WHERE bids > 190 

UNION

SELECT name, cost, bids FROM items WHERE cost > 1000;

![The result with union order](/img/screen-shot-2019-09-09-at-14.28.40.png)

**Searching Fulltext Word in MySQL**

First we have to activate this command => ALTER TABLE items ADD FullText(name);

SELECT name, cost FROM items WHERE MATCH(name) Against('baby ');

![The result for Word baby.](/img/screen-shot-2019-09-09-at-15.24.01.png)

Another Example for searching Full text  Word.

SELECT name, cost FROM items WHERE MATCH(name) Against('baby -coat' IN BOOLEAN MODE);



![The result with removing one items](/img/screen-shot-2019-09-09-at-15.27.32.png)
