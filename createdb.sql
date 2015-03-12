-- sql

CREATE TABLE chats(
   id INT PRIMARY KEY     	NOT NULL,
   name           CHAR(50)  NOT NULL,
   last_text      CHAR(50)  NOT NULL,
   face        	  text      NOT NULL
);


INSERT INTO chats (id, name, last_text, face) 
VALUES (1,'Ben Sparrow','You on your way?','https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png');

INSERT INTO chats (id, name, last_text, face) 
VALUES (2,'Max Lynx','Hey, it is me','https://avatars3.githubusercontent.com/u/11214?v=3&s=460');

