CREATE TABLE people(
  id serial primary key,
  name varchar(64) not null unique,
  text text,
  registered boolean default false,
  date timestamp with time zone not null
    default current_timestamp
);
