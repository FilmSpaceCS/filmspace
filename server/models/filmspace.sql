DROP TABLE IF EXISTS users; 
CREATE TABLE users (
  _id SERIAL PRIMARY KEY ,
  username varchar NOT NULL UNIQUE ,
  password varchar NOT NULL
);

DROP TABLE IF EXISTS show;
CREATE TABLE show (
  _id SERIAL PRIMARY KEY ,
  title varchar NOT NULL UNIQUE
);

DROP TABLE IF EXISTS service;
CREATE TABLE service (
    _id SERIAL PRIMARY KEY ,
    name varchar NOT NULL UNIQUE
);

DROP TABLE IF EXISTS join_service;
CREATE TABLE join_service (
    _id SERIAL PRIMARY KEY ,
    show_id bigint NOT NULL ,
    service_id bigint NOT NULL ,
    url varchar NOT NULL,
    img varchar NOT NULL
);

ALTER TABLE join_service ADD CONSTRAINT "show_fk" FOREIGN KEY ("show_id") REFERENCES show("_id");
ALTER TABLE join_service ADD CONSTRAINT "service_fk" FOREIGN KEY ("service_id") REFERENCES service("_id");

DROP TABLE IF EXISTS join_user;
CREATE TABLE join_user (
  _id SERIAL PRIMARY KEY ,
  user_id bigint NOT NULL ,
  join_service_id bigint NOT NULL
);

ALTER TABLE join_user ADD CONSTRAINT "user_fk" FOREIGN KEY ("user_id") REFERENCES users("_id");
ALTER TABLE join_user ADD CONSTRAINT "join_service_fk" FOREIGN KEY ("join_service_id") REFERENCES join_service("_id");