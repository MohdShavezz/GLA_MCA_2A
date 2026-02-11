use db_grp_a;
show tables;
select * from users;

CREATE TABLE departments (
    dept_id INT PRIMARY KEY, 
    dept_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    salary DECIMAL(10,2),
    dept_id INT,
    email VARCHAR(100) UNIQUE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

show tables;
desc employees;
desc departments;

INSERT INTO departments VALUES
(1, 'HR'),
(2, 'Engineering'),
(3, 'Sales');
INSERT INTO employees VALUES
(101, 'Aman', 25, 40000, 2, 'aman@mail.com'),
(102, 'Riya', 28, 50000, 2, 'riya@mail.com'),
(103, 'Karan', 35, 60000, 1, 'karan@mail.com'),
(104, 'Sneha', 30, 45000, 3, 'sneha@mail.com'),
(105, 'Rohit', 26, 38000, NULL, 'rohit@mail.com');

select * from departments;
select * from employees;

select employees.emp_name, employees.age ,employees.salary , departments.dept_name 
from employees
left join departments
on employees.dept_id = departments.dept_id;

select e.emp_name, e.age ,e.salary , d.dept_name 
from employees e
inner join departments d
on e.dept_id = d.dept_id;

select * from Departments;
select * from employees;

-- Q1 Average salary of employees in each department.
select dept_id,avg(salary) from employees
group by dept_id;
-- Q2 Employee names whose salaries are above than average salary of employee.
select emp_name  from employees 
where salary>(select avg(salary) from employees);
-- Q3 Second highest salary
-- select distinct salary from employees
-- order by salary desc limit 2;

select max(salary) from employees
where salary < (select max(salary) from employees);
