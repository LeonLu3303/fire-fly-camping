
-- CREATE TABLE 後面加TABLE名稱 (欄位名稱_欄位類型_欄位特性) _代表空白
CREATE TABLE Member(
mem_no int NOT NULL PRIMARY KEY AUTO_INCREMENT,
mem_id  varchar(20) NOT NULL UNIQUE,
mem_psw varchar(20) NOT NULL,
mem_name varchar(100) NOT NULL,
mem_nick_name  varchar(20) NOT NULL,
mem_email varchar(100) NOT NULL,
mem_city varchar(10) NOT NULL,
mem_district varchar(10) NOT NULL,
mem_addr varchar(300) NOT NULL,
mem_phone varchar(30) NOT NULL,
mem_pic tinyint ,
mem_status tinyint NOT NULL,
reigister_date datetime NOT NULL
);

INSERT INTO member 
VALUES(001,'tktk426','abcd1234','王小明','亂源阿明','ahmin@gmail.com','桃園市','中壢區','復興路46號9樓','0987987987','2','1','2022-09-28 00:00:00'),
	  (002,'tktk0426','abcd1234','林志奸','我的抄人','superman@gmail.com','新竹市','子虛區','烏有路87號','0987487487','1','1','2022-09-28 10:00:00');

create table discuss(
discuss_no int PRIMARY KEY AUTO_INCREMENT,
mem_no int not null,
discuss_title varchar(50),
discuss_content varchar(1000),
discuss_pic varchar(50),
discuss_post_time DATETIME Not Null,
discuss_status TINYINT not null,
comment_count INT,
background_type TINYINT Not Null,
constraint fk_discuss_mem_no foreign key (mem_no) references member (mem_no)
);


create table comment(
comment_no int PRIMARY KEY AUTO_INCREMENT,
discuss_no int not null,
comment_content varchar(1000),
mem_no int not null,
comment_date DATETIME Not Null,
comment_status TINYINT Not Null,
constraint fk_comment_mem_no foreign key (mem_no) references member (mem_no),
constraint fk_comment_discuss_no foreign key (discuss_no) references discuss (discuss_no)
);

create table report(
report_no int PRIMARY KEY AUTO_INCREMENT,
comment_no int ,
discuss_no int ,
mem_no int not null ,
report_content varchar(200),
report_time datetime not null,
report_result tinyint not null,
constraint fk_report_mem_no foreign key (mem_no) references member (mem_no),
constraint fk_report_discuss_no foreign key (discuss_no) references discuss (discuss_no),
constraint fk_report_comment_no foreign key (comment_no) references comment (comment_no)
);

create table news(
news_no int PRIMARY KEY AUTO_INCREMENT,
news_title varchar(30) not null,
news_subtitle varchar(30) not null,
news_content varchar(1000) not null,
news_pic varchar(50) not null,
news_post_time datetime not null
);

create table orders(
orders_no int PRIMARY KEY AUTO_INCREMENT,
tent_no int not null,
mem_no int not null,
tent_style_no int not null,
activity_no int,
food_no int,
equip_no int,
area_no tinyint not null,
payment_methods tinyint not null,
payment_time datetime ,
account_no int not null,
payment_status tinyint not null,
orders_total int not null,
orders_time datetime not null,
checkin_date datetime not null,
checkout_date datetime not null,
constraint fk_orders_mem_no foreign key (mem_no) references member (mem_no),
constraint fk_orders_tent_no foreign key (tent_no) references tent (tent_no),
constraint fk_orders_tent_style_no foreign key (tent_style_no) references tent_style (tent_style_no),
constraint fk_orders_activity_no foreign key (activity_no) references activity (activity_no),
constraint fk_orders_food_no foreign key (food_no) references food (food_no),
constraint fk_orders_equip_no foreign key (equip_no) references equip (equip_no),
constraint fk_orders_area_no foreign key (area_no) references area (area_no)
);

create table tent_style(
tent_style_no int PRIMARY KEY AUTO_INCREMENT,
tent_style_people tinyint not null,
area_no tinyint not null,
tent_style_type tinyint not null,
tent_style_name varchar(20) not null,
tent_style_pic varchar(50) not null,
tent_style_info varchar(1000) not null,
tent_style_price int not null,
tent_qty int not null,
tent_status tinyint not null,
constraint fk_tent_style_area_no foreign key (area_no) references area (area_no)
);

create table tent(
tent_no int PRIMARY KEY,
tent_style_no int not null,
area_no tinyint not null,
tent_status tinyint not null,
mem_no int,
tent_date datetime not null,
tent_year datetime not null,
constraint fk_tent_tent_style_no foreign key (tent_style_no) references tent_style (tent_style_no),
constraint fk_tent_area_no foreign key (area_no) references area (area_no),
constraint fk_tent_mem_no foreign key (mem_no) references member (mem_no)
);

create table area(
area_no tinyint not null PRIMARY KEY,
area_name varchar(20) not null,
activity_subtitle varchar(30) not null,
activity_info varchar(1000) not null,
activity_pic varchar(50) not null
);

create table reserve(
reserve_no int PRIMARY KEY AUTO_INCREMENT,
tent_style_no int not null,
reserve_date datetime not null,
tent_left int not null,
tent_stock int not null,
reserve_status tinyint not null,
constraint fk_reserve_tent_style_no foreign key (tent_style_no) references tent_style (tent_style_no)
);

create table food(
food_no int PRIMARY KEY,
food_name varchar(40) not null,
food_price int not null,
food_info varchar(200) not null,
food_pic varchar(50) not null,
food_status tinyint not null
);

create table equip(
equip_no int PRIMARY KEY,
equip_name varchar(40) not null,
equip_price int not null,
equip_pic varchar(50) not null,
equip_info varchar(200) not null
);

create table Activity(
activity_no int PRIMARY KEY,
area_no tinyint not null,
activity_name varchar(40) not null,
activity_subtitle varchar(30) not null,
activity_synopsis varchar(500) not null,
activity_info varchar(1000) not null,
activity_pic varchar(50) not null,
activity_price INT not null,
activity_suitable_guest varchar(20),
activity_note varchar(500),
constraint fk_activity_area_no foreign key (area_no) references area (area_no)
);

create table product_order(
product_order_no int PRIMARY KEY AUTO_INCREMENT,
mem_no int not null,
product_order_status tinyint not null,
product_order_time datetime not null,
product_order_pickup_time datetime ,
product_order_pickup_place varchar(50) not null,
product_order_total int not null,
constraint fk_product_order_mem_no foreign key (mem_no) references member (mem_no)
);

create table Product_order_list(
product_order_no int not null,
product_no int not null,
product_order_list_qty int not null,
product_order_list_price int not null,
constraint fk_product_order_list_product_order_no foreign key (product_order_no) references product_order (product_order_no),
constraint fk_product_order_list_product_no foreign key (product_no) references product (product_no),
constraint pk_product_order_list_product_order_no_product_no primary key(product_order_no,product_no)
);

create table Product(
product_no int PRIMARY KEY,
product_type_no int ,
product_name VARCHAR(20) not null,
product_price int not null,
product_info varchar(1000) not null,
product_pic varchar(50) not null,
product_status tinyint not null,
product_update date not null,
constraint fk_product_product_type_no foreign key (product_type_no) references product_type (product_type_no)
);

create table product_type(
product_type_no int primary key,
product_type_name varchar(20) not null
);




-- (執行這個才能解除安全模式刪除資料)
-- SET SQL_SAFE_UPDATES = 0;


-- (清空member所有資料)
-- DELETE FROM member;
