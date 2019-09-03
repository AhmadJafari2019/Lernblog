+++
title = "MySQL"
date = "2019-09-02"
draft = false
pinned = false
tags = ["MySQL"]
image = "/img/sql.png"
description = "MySQL (RDBMS ) is an open-source relational database management system."
+++
# MySQL

MySQL is an open-source relational database management system. The SQL acronym stands for Structured Query Language. 

## DataBase:

The Collection of Data which made or include the puzzle. The puzzle which keep and save the same information. All of the puzzle has the Primary Key and all of the keys are in the column not in rows. 

![An image of the basic Database with Data inside the Puzzle](/img/screen-shot-2019-09-03-at-14.32.15.png)

## SQL:

A language that uses by the Database and MySQL is a program that SQL understand it.

##  XAMPP

Today i installed the XAMPP.  XAMPP stands for Cross-Platform (X), Apache (A), MariaDB (M), PHP (P) and Perl (P). It is a simple, lightweight Apache distribution that makes it extremely easy for developers to create a local web server for testing and deployment purposes.

I download a Database Puzzle from the Newboston  website which i work on it to understand the SQL.

**How to write the SQL code?**

We write the SQL code with Uppercase  alphabet. Some Query command in SQL are:

SHOW DATABASES => It shows the Databases that we created before.

SHOW TABLES => It shows the Tables which exist inside the Databases.

SELECT city FROM customers => It shows the cities column from the  customers Table in the  Databases.

**How to give info from several columns? The command query is** :

SELECT city, zip FROM customers => It shows the city column and the zip column(put comma between the columns).

SELECT *  FROM customers; => It shows the whole columns and the rows from the Puzzle in the Databases.

**DISTINCT and LIMIT order in SQL:**

_DISTINCT : The SELECT DISTINCT statement is used to return only distinct (different) values. Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct)values. Example : SELECT DISTINCT state FROM customers(it takes the unique state from the customers table)._

LIMIT: It shows the Limit of the info that we define it.  Example : SELECT id, name FROM customers LIMIT 5;

or SELECT id, name FROM customers LIMIT 15, 5;  // It shows us the 16, 17, 18,19,20 (the 5 option after the 15).

__

__

****
