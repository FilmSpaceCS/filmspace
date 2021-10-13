DROP TABLE IF EXISTS users CASCADE; 
CREATE TABLE users (
  _id SERIAL PRIMARY KEY ,
  username varchar NOT NULL UNIQUE ,
  password varchar NOT NULL
);

DROP TABLE IF EXISTS show CASCADE;
CREATE TABLE show (
  _id SERIAL PRIMARY KEY ,
  title varchar NOT NULL UNIQUE
);

DROP TABLE IF EXISTS service CASCADE;
CREATE TABLE service (
    _id SERIAL PRIMARY KEY ,
    name varchar NOT NULL UNIQUE,
    img varchar NOT NULL
);

DROP TABLE IF EXISTS join_service CASCADE;
CREATE TABLE join_service (
    _id SERIAL PRIMARY KEY ,
    show_id bigint NOT NULL ,
    service_id bigint NOT NULL ,
    url varchar NOT NULL
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

INSERT INTO service (name, img) VALUES ('Netflix', 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/NetflixIVAGB.png?w=92&auto=compress&app_version=9b01e497-d87f-4baa-827d-15d07b444af4_1e1212w2021-10-11');
INSERT INTO service (name, img) VALUES ('Amazon', 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=9b01e497-d87f-4baa-827d-15d07b444af4_1e1212w2021-10-11');
INSERT INTO service (name, img) VALUES ('Google Play', 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=9b01e497-d87f-4baa-827d-15d07b444af4_1e1212w2021-10-11');
INSERT INTO service (name, img) VALUES ('iTunes', 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=9b01e497-d87f-4baa-827d-15d07b444af4_1e1212w2021-10-11');

INSERT INTO show (title) VALUES ('Friends');
INSERT INTO show (title) VAlUES ('Office');
INSERT INTO show (title) VALUES ('Silicon Valley');
INSERT INTO show (title) VALUES ('Fantastic Fungi');
INSERT INTO show (title) VALUES ('Breaking Bad');

INSERT INTO users (username, password) VALUES ('Jo-Cella', 'algosareeasy');
INSERT INTO users (username, password) VALUES ('JC', 'ihatealgos');
INSERT INTO users (username, password) VALUES ('Kenneth', 'beersallday');
INSERT INTO users (username, password) VALUES ('Michael', 'quokka');
INSERT INTO users (username, password) VALUES ('Miles', 'bigbagofgreens');

INSERT INTO join_service (show_id, service_id, url) VALUES (1, 1, 'netflix.com');
INSERT INTO join_service (show_id, service_id, url) VALUES (2, 2, 'amazon.com');
INSERT INTO join_service (show_id, service_id, url) VALUES (3, 3, 'google.com');
INSERT INTO join_service (show_id, service_id, url) VALUES (4, 4, 'itunes.com');
INSERT INTO join_service (show_id, service_id, url) VALUES (5, 1, 'netflix.com');

INSERT INTO join_user (user_id, join_service_id) VALUES (1, 1);
INSERT INTO join_user (user_id, join_service_id) VALUES (2, 2);
INSERT INTO join_user (user_id, join_service_id) VALUES (3, 3);
INSERT INTO join_user (user_id, join_service_id) VALUES (4, 4);
INSERT INTO join_user (user_id, join_service_id) VALUES (5, 5);



