+++
title = "Making a row in MySQL"
date = "2019-09-09"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
description = ""
+++
**Making a row in MySQL**

INSERT INTO items VALUES('101', 'NAME1', '9.99', '1', '0');

This command will create a new rows which called NAME1.

OR 

INSERT INTO items(id, name, cost, seller_id, bids)

VALUES('102', 'NAME2', '8.99', '1', '0');

![The image result from the last two Query for making a row.](/img/screen-shot-2019-09-09-at-16.24.03.png)

**Making multiple row in MySQL**

INSERT INTO items(id, name, cost, seller_id, bids) 

VALUES('103', 'beef', '12.05', '1', '0'),

('104', 'chicken', '8.10', '1', '0'),

('105', 'Gell', '5', '1', '0');

That is a great way to make several rows together.

![Several rows together with a query command.](/img/screen-shot-2019-09-09-at-16.49.34.png)

**UPDATE and DELETE in MySQL**

UPDATE items SET name = "Chicken Fried Rice", bids = 66 WHERE id = 104;

![The UPDATE result](/img/screen-shot-2019-09-09-at-17.04.11.png)

**DELETE:**

DELETE FROM items WHERE id = 106;

**Making a Table:**

CREATE TABLE Users(id int, Username VARCHAR(30), Password VARCHAR(20), PRIMARY KEY(id));

It creates the users table which has three columns the id type is integer , Username type is VARCHAR  which can be everything and Password is also VARCHAR, 30 and 20 are the amount of Username and Password.

**Orders of NOT NULL and AUTO INCREMENT in MySQL**

CREATE TABLE Ali(

id int NOT NULL AUTO_INCREMENT,

\    Username VARCHAR(30)NOT NULL,

\    Password VARCHAR(20) NOT NULL,

\    PRIMARY KEY(id)

)

It will creates the Ali table and id is not allow to be empty and will create the id automatically. when i inserted the value to this table,  i did not give the id, it creates the id automatically i give just the value of Username and Password.

**The Orders Alter Drop and Rename in MySQL.**

ALTER TABLE Ali ADD column1 VARCHAR(10);

It will creates the column1 in Ali table.

![The result with ALTER ADD.](/img/screen-shot-2019-09-09-at-18.52.08.png)

DROP:

ALTER TABLE Ali DROP COLUMN column1; It will delete the column1 from table Ali.

RENAME:

RENAME TABLE Ali to ALEX; => It will rename the tables.

DELETE:

DROP TABLE ALEX; => It will delete the table ALEX.
