

CREATE TABLE hotel_details (
id NUMBER PRIMARY KEY,
name VARCHAR2(30),
rating VARCHAR2(10),
rate NUMBER(8, 2),
available_rooms NUMBER);

INSERT INTO hotel_details VALUES(1, 'Hilton Hotel', '3 Star', 7572, 20);
INSERT INTO hotel_details VALUES(2, 'Vivanta by TAJ', '5 Star', 18000, 12);
INSERT INTO hotel_details VALUES(3, 'New Ginger Resort', '3 Star', 7572, 20);
INSERT INTO hotel_details VALUES(4, 'Woodlands Hotel', '5 Star', 35000, 25);

CREATE TABLE booking_details (
id NUMBER PRIMARY KEY,
customer_name VARCHAR2(30),
hotel_id NUMBER,
to_date DATE,
from_date DATE,
no_of_rooms NUMBER);

commit;