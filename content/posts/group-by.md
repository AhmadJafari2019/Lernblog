+++
title = "Group by"
date = "2019-09-06"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
+++
**The Group by functions**

_SELECT seller_id, COUNT(*) AS Item_count  FROM items WHERE seller_id = 2;_

It will select the seller_id and count it and give it a name(item_count ) from items where seller_id= 2;

![The result pic from last Command.](/img/screen-shot-2019-09-08-at-23.25.59.png)

**The GROUP BY Functions**

SELECT seller_id, COUNT(*) AS ITEM_COUNT FROM items GROUP BY seller_id;

It will count the seller_id from items table and GROUP it BY seller_id and give it the name Item_count.

![The result from GROUP By ](/img/screen-shot-2019-09-08-at-23.36.18.png)

If we are looking for an specific item, we write the command like down.

SELECT seller_id, COUNT(\*) AS ITEM_COUNT FROM items GROUP BY seller_id HAVING COUNT(\*)>= 3;

It will output the items which are greater than 3.

![The Command with using HAVING.](/img/screen-shot-2019-09-08-at-23.46.06.png)

**The SUB Query** 

SELECT name, cost FROM items WHERE cost >=(

\    SELECT AVG(cost) FROM items)

\    ORDER BY cost DESC LIMIT 10;

The command inside the Parentheses  is the Sub query. But the Whole command selects the name and the cost from items table where the cost are greater than Average(cost), it orders from up to down just 10 items.

![The image from Sub query.](/img/screen-shot-2019-09-09-at-00.07.12.png)

**Another Example of the Sub Query** 

SELECT name, MIN(cost)FROM items WHERE name LIKE '%boxes of frogs' 

And seller_id IN(SELECT seller_id FROM items WHERE name LIKE '%boxes of frogs');

It will first calculate the inside Parentheses and then will calculate the MIN(cost).

![The result for the sub query.](/img/screen-shot-2019-09-09-at-01.08.18.png)
