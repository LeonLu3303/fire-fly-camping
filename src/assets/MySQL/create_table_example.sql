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
)AUTO_INCREMENT = 001;

INSERT INTO member 
VALUES(001,'tktk426','abcd1234','王小明','亂源阿明','ahmin@gmail.com','桃園市','中壢區','復興路46號9樓','0987987987','2','1','2022-09-28 00:00:00'),
	  (002,'tktk0426','abcd1234','林志奸','我的抄人','superman@gmail.com','新竹市','子虛區','烏有路87號','0987487487','1','1','2022-09-28 10:00:00');


-- (執行這個才能解除安全模式刪除資料)
-- SET SQL_SAFE_UPDATES = 0;


-- (清空member所有資料)
-- DELETE FROM member;
