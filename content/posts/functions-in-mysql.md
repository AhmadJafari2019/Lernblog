+++
title = "Functions in MySQL"
date = "2019-09-05"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
+++
**Functions in MySQL**

**UPPER:**

SELECT name, UPPER(name) FROM customers; It makes a new column and write the name with  Uppercase.

![The images from UPPER order.](/img/screen-shot-2019-09-07-at-01.23.16.png)

**SQRT** 

SELECT cost, SQRT(cost) FROM items;

It selects the root of the cost from the items table.

![The SQRT(cost)](/img/screen-shot-2019-09-07-at-01.30.50.png)

**AVRAGE (AVG)**

SELECT AVG(cost) FROM items; => It select the Average of cost from Items table.

![The AVG image.](/img/screen-shot-2019-09-07-at-01.37.44.png)

**SUM**

SELECT SUM(bids) FROM items; => It calculates the sum of the bids column from the items table.

![The SUM (bids) Image.](/img/screen-shot-2019-09-07-at-01.41.49.png)

**Several Functions**

**SELECT COUNT(*) FROM items WHERE seller_id = 6;** => It select the  all count from items where seller_id is equal to six.

**SELECT COUNT(*) AS item_count,**

**MAX(cost) AS MAX,**

**AVG(cost) AS Average**

**FROM items WHERE seller_id = 12;**

It defined the count as the item_count and Max cost and the Average from the items table where the seller id is  equal to 12.

![The several functions in one query command.](/img/screen-shot-2019-09-07-at-02.04.21.png)
