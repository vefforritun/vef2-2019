drop table if exists users;

create table users (
  id serial primary key,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  catch_phrase VARCHAR(255)
);
