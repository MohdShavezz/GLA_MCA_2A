create database db_grp_a;
use db_grp_a;
create table users(
   name varchar(50) not null,
   age int not null,
   email varchar(50) not null
);
desc users;
insert into users (name,age,email) values 
('rahul',22,'r@gmail.com'),
('soniya',23,'s@gmail.com'),
('veer',21,'v@gmail.com');

select * from users;

SET SQL_SAFE_UPDATES = 0;

update users
set email='rahul@gmail.com'
where name='rahul';

delete from users 
where name='rahul';

alter table users add gender varchar(50);
desc users;
truncate users;

select count(name) from users;
select max(age) from users;
select sum(age) as mysum from users;
select * from users
order by age desc
limit 2;

select concat(name,' ',age) as name_age from users;

alter table users change gender newgender varchar(20);
drop table users;





