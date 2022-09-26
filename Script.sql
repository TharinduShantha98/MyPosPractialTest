DROP DATABASE  IF EXISTS testDb;
CREATE DATABASE IF NOT EXISTS testDb;
USE testDb;

DROP TABLE IF EXISTS Invoice_Hed;
CREATE TABLE IF NOT EXISTS Invoice_Hed(
    Invoice_Hed_id INT,
    Invoice_Hed_date VARCHAR (45),
    Invoice_Hed_Amount DOUBLE,
    CONSTRAINT PRIMARY KEY(Invoice_Hed_id)

);


DROP TABLE IF EXISTS Products;
CREATE TABLE IF NOT EXISTS Products(
    Products_id INT,
    Products_NAME VARCHAR (45),
    Products_price DOUBLE (45),
    Products_qty INT,
    CONSTRAINT PRIMARY KEY(Products_id)

);

DROP TABLE IF EXISTS Invoice_Detail;
CREATE TABLE IF NOT EXISTS Products(
    Invoice_Detail_id INT,
    Invoice_Detail_qty INT,
    Invoice_Detail_amount DOUBLE,
    Invoice_Hed_Invoice_Hed_id  INT,
    Products_Products_id INT,
    CONSTRAINT PRIMARY KEY(Products_id),
    CONSTRAINT FOREIGN KEY (Invoice_Hed_Invoice_Hed_id) REFERENCES Invoice_Hed(Invoice_Hed_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT FOREIGN KEY (Products_Products_id) REFERENCES Products(Products_id) ON DELETE CASCADE ON UPDATE CASCADE




);




INSERT INTO Products VALUES (100, "rice", "280", 450);






