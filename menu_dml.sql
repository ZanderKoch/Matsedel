INSERT INTO menu(serving_date, description) VALUES("2021-12-04", "Miso soup whit white bread" );

INSERT INTO menu(serving_date, description) VALUES("2021-05-08", "Pinapple cake whit ice cream and numerus berrys" );

INSERT INTO menu(serving_date, description) VALUES("2021-12-24", "Lutfisk o potatis serveras med vitsås och fleskaflåt" );

INSERT INTO menu(serving_date, description) VALUES("", "Grillad ryggbiff serveras med hasselbacks potatis och rödvinsås" );

INSERT INTO menu(serving_date, description) VALUES("2021-01-02", "" );

INSERT INTO menu(serving_date, description) VALUES("", "");

INSERT INTO menu(serving_date, description) VALUES("2018-05-08", "köttfärspaj serveras med stuvad grönkol");

INSERT INTO menu(serving_date, description) VALUES("2013-06-18", "sillamacka");

INSERT INTO menu(serving_date, description) VALUES( null, "kaka" );

INSERT INTO menu(serving_date, description) VALUES("2010-06-05", null);

INSERT INTO menu(serving_date, description) VALUES(null, null);

INSERT INTO menu(serving_date, description) VALUES("2008-07-28", "grillad lax med potatissallad");

INSERT INTO menu(serving_date, description) VALUES("20210403", "pankaka" );

INSERT INTO menu(serving_date, description) VALUES("2020-04-1", "äggakaka" );

INSERT INTO menu(serving_date, description) VALUES("2020-2-1", "pizza" );

INSERT INTO menu(serving_date, description) VALUES("", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ligula laoreet, placerat enim suscipit, scelerisque augue. Nunc vitae ligula sollicitudin tellus lobortis consectetur vitae eu mauris. Duis maximus sollicitudin ante. Pellentesque pharetra ornare lorem quis euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ullamcorper libero euismod lobortis placerat. Pellentesque ante arcu, semper id orci eu, congue aliquet dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin odio quam, imperdiet vitae purus et, maximus varius mi. Nullam a felis egestas, egestas nisl sit amet, auctor ante. Nunc vel egestas leo. Nulla et elit in urna pharetra ultrices." );

INSERT INTO menu(serving_date, description) VALUES("2021-11-32", "te" );

INSERT INTO menu(serving_date, description) VALUES("2054-01-28", "stekt lax med potatis och kallsås" );

INSERT INTO menu(serving_date, description) VALUES("2064-09-28", "höst-sallad" );

INSERT INTO menu(serving_date, description) VALUES("2024-02-29", "raggmunkar med lingon och stek fläsk" );

INSERT INTO menu(serving_date, description) VALUES("2006-02-29", "kolpudding med potatis, lingon och sås" );

INSERT INTO menu(serving_date, description) VALUES("2033-02-31", "Tacopaj" );

INSERT INTO menu(serving_date, description) VALUES("äpple paj", "2018-12-19" );

INSERT INTO menu(serving_date, description) VALUES("2020-40-18", "Tims helagade paj" );

INSERT INTO menu(serving_date, description) VALUES("2020-00-18", "ramen" );

INSERT INTO menu(serving_date, description) VALUES("2000-04-00", "Glass" );

INSERT INTO menu(serving_date, description) VALUES("2030-11-20", "Tims hemlagade paj" );

INSERT INTO menu(serving_date, description) VALUES("2030-11-31", "taocs" );

INSERT INTO menu(serving_date, description) VALUES("22020-11-10", "helsteckt spätta med kokt potatis och remuladsås" );

INSERT INTO menu(serving_date, description) VALUES("8080-10-18", "friterad biff med ris och sötsursås" );

SELECT * FROM menu ORDER BY serving_date ASC;
SELECT * FROM menu ORDER BY serving_date DESC;
SELECT * FROM menu ORDER BY description ASC;
SELECT * FROM menu ORDER BY description DESC;
SELECT * FROM menu ORDER BY id ASC;
SELECT * FROM menu ORDER BY id DESC;
SELECT * FROM menu WHERE serving_date LIKE "202%-%-%" ORDER BY serving_date ASC;
SELECT * FROM menu WHERE serving_date LIKE "20%-%-%" ORDER BY serving_date ASC;
