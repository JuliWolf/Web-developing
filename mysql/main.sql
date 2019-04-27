Типы данных MySQL

Символьные данные
char(20) - строка фиксированной длины
varchar(20) - строка переменной длины

Текстовые данные
TinyText - 255 символов
Text - 65 535 символов
Mediumtext - 16 777 215 символов
Longtext - 4 294 967 295 символов

Числовые данные
Tinyint - от 0 до 255 значений
Smallint - от 0 до 65 535 значений
Mediumint - от 0 до 16 777 215 значений
Int - от 0 до 4 294 967 295 значений
Bigint - от 0 до 18 446 744 073 709 551 615 значений

Числа с плавающей точкой
Float
Double

Временные данные
Date - YYYY-MM-DD
Datetime - YYYY-MM-DD HH:MI:SS
Timestamp - YYYY-MM-DD HH:MI:SS
Year - YYYY
Time - HHH:MI:SS

//------------------------------------------------------------------------------------------


Создание таблицы

CREATE TABLE (name)
( (table_name) (type)
	(table_name) (type)
	CONSTRAINT (table_name) PRIMARY KEY (person_id)
);

CREATE TABLE person
( person_id SMALLINT UNSIGNED,
	fname VARCHAR(20),
	lname VARCHAR(20),
	gender CHAR(1),
	birth_date DATE,
	address VARCHAR(20),
	city VARCHAR(20),
	state VARCHAR(20),
	country VARCHAR(20),
	postal_code VARCHAR(20),
	CONSTRAINT pk_person PRIMARY KEY (person_id)
);

Ограничения
CONSTRAINT - ограничение первичного ключа (PRIMARY KEY (person_id) ) с названием pk_person
ENUM ('M', 'F') - ограничение по знакам, которые можно использовать в столбце
gender ENUM ('M', 'F'),


//------------------------------------------------------------------------------------------


Создание таблицы связанной с предыдущей
Ограничение foreign key constraint (не позволяет включить в таблицу значения person_id, которых нет в таблице person)

CREATE TABLE favourite_food
(person_id SMALLINT UNSIGNED,
 food VARCHAR(20),
// у человека может быть несколько любимых блюд
 CONSTRAINT pk_favourite_food PRIMARY KEY (person_id, food),
 CONSTRAINT fk_person_id FOREIGN KEY (person_id)
	REFERENCES person (person_id)
 );


//------------------------------------------------------------------------------------------


 Выражение insert - добавление новой строки

 INSERT INTO person
 (person_id, fname, lname, gender, birth_date)
 VALUES (null, 'William', 'Turner', 'M', '1972-05-27');


//------------------------------------------------------------------------------------------


Блок FROM
Определеяет таблицы, используемые запросом, а также средства связывания таблиц

//************************
 Выбор данных из таблицы

 SELECT (table_name), (table_name)
 FROM (name);

 SELECT person_id, fname, lname, birth_date
 FROM person;

 //************************
 Уточнение для отбора данных

 SELECT (table_name), (table_name)
 FROM (name)
 FROM (table_name) = (value);

 SELECT person_id, fname, lname, birth_date
 FROM person
 WHERE person_id = 1;

 //************************
 Выбор данных из таблицы(расширенные возможности)
  SELECT (table_name),
 (value) (table_name),
 (table_name) * (value) (table_name),
 UPPER((value)) (table_name)
 FROM (name);

 SELECT emp_id,
 'ACTIVE' status,
 emp_id * 3.14159 empid_x_pi,
 UPPER(lname) last_name_upper
 FROM employee;

 //************************
 Фильтрация дубликатов
 SELECT DISTINCT (table_name)
 FROM (name);

 SELECT DISTINCT cust_id
 FROM account;


//------------------------------------------------------------------------------------------


 Подзапрос

//************************

 SELECT e.emp_id, e.fname, e.lname
 FROM (SELECT emp_id, fname, lname, start_date, title
 FROM employee) e;

 SELECT account_id, product_cd, cust_id, avail_balance
 FROM account
 WHERE product_cd IN (SELECT product_cd FROM product
 WHERE product_type_cd = 'ACCOUNT');


//*********************************************************************
Несвязанные подзапросы(noncorrelated subqueries)
Можно использовать любые из блоков запросов (select, from, where, group by, having, order by)

SELECT account_id, product_cd, cust_id, avail_balance
FROM account
WHERE open_emp_id <>
	(SELECT e.emp_id
		FROM employee e INNER JOIN branch b
			ON e.assigned_banch_id = b.branch_id
			WHERE e.title = 'Head Teller' AND b.city = 'Woburn');

//************************
Оператор in
Для поиска значений в наборе значений

SELECT branch_id, name, city
FROM branch
WHERE name IN ('Headquaters', 'Quincy Branch');


Проверка на отсутсвие значений

SELECT emp_id, fname, lname, title
FROM employee
WHERE emp_id NOT IN (SELECT superior_emp_id
	FROM employee
	WHERE superior_emp_id IS NOT NULL);

//************************
Оператор all
Позволяет проводить сравнение одиночного значения с каждым значением набора

(находит всех сотрудников, id которых не равен ни одному из id руководителей)
SELECT emp_id, fname, lname, title
FROM employee
WHERE emp_id <> ALL (SELECT superior_emp_id
	FROM employee
	WHERE superior_emp_id IS NOT NULL);

//************************
Оператор any
Позволяет сравнивать значение с элементами набора значений

(Найти все счета, доступный остаток которых больше, чем на любом из счетов Френка Такера)
SELECT account_id, cust_id, product_cd, avail_balance
FROM account
WHERE avail_balance > ANY (SELECT a.avail_balance
	FROM account a INNER JOIN individual i
		ON a.cust_id = i.cust_id
	WHERE i.fname = 'Frank' AND i.lname = 'Tucker');

//************************
Подзапрос, который возвращает больше чем один столбец

SELECT account_id, product_cd, cust_id
FROM account
WHERE (open_branch_id, open_emp_id) IN
	(SELECT b.branch_id, e.emp_id
	FROM branch b INNER JOIN employee e
		ON b.branch_id = e.assigned_branch_id
	WHERE b.name = 'Woburn Branch'
	AND (e.title = 'Teller' OR e.title = 'Head Teller'));


//*********************************************************************
Связанные подзапросы(correlated subquery)

SELECT c.cust_id, c.cust_type_cd, c.city
FROM customer c
WHERE 2 = (SELECT COUNT(*)
	FROM account a
	WHERE a.cust_id = c.cust_id);

//************************
Оператор exists
Если требуется показать, что связть есть а кол-во связей не имеет значения

SELECT a.account_id, a.product_cd, a.cust_id, a.avail_balance
FROM account a
WHERE EXISTS (SELECT 1
	FROM transaction t
	WHERE t.account_id = a.account_id
		AND t.txn_date = '2005-01-22');


//------------------------------------------------------------------------------------------


 Представления
  при создании представления сервер сохраняет выражение 'select' для дальнейшего представления

//************************

 при создании представления сервер сохраняет выражение 'select' для дальнейшего представления
 CREATE VIEW employee_vw AS
 SELECT emp_id, fname, lname,
	YEAR(start_date) start_year
 FROM employee;

 После создания представления
 SELECT emp_id, start_year
 FROM employee_vw;


//------------------------------------------------------------------------------------------


Блок WHERE
Это механизм отсеивания нежелательных строк из результирующего набора

//************************
SELECT emp_id, fname, lname, start_date, title
FROM employee
WHERE title = 'Head Teller';

//************************
Использование дополнительных условий фильтрации
	'AND' - должны выполняться все условия
SELECT emp_id, fname, lname, start_date, title
FROM employee
WHERE title = 'Head Teller'
	AND start_date > '2002-01-01';
	'OR' - должно быть выполнено хотя бы одно условие
SELECT emp_id, fname, lname, start_date, title
FROM employee
WHERE title = 'Head Teller'
	OR start_date > '2002-01-01';
	Группировка условий
SELECT emp_id, fname, lname, start_date, title
FROM employee
WHERE (title = 'Head Teller' AND start_date > '2002-01-01')
	OR (title = 'Teller' AND start_date > '2003-01-01');

//************************
Оператор between
Если имеются верхняя и нижняя границы

SELECT emp_id, fname, lname, start_date
	FROM employee
	WHERE start_date BETWEEN '2001-01-01' AND '2003-01-01';

//************************
Оператор IN

SELECT account_id, product_cd, cust_id, avail_balance
FROM account
WHERE product_cd = 'CHK' OR product_cd = 'SAV'
	OR 	product_cd = 'CD' OR product_cd = 'MM'

SELECT account_id, product_cd, cust_id, avail_balance
FROM account
WHERE product_cd IN ('CHK', 'SAV', 'CD', 'MM');

//************************
Оператор NOT IN
Поиск если отсутствует

SELECT account_id, product_cd, cust_id, avail_balance
FROM account
WHERE product_cd NOT IN ('CHK', 'SAV', 'CD', 'MM')



//------------------------------------------------------------------------------------------


Блок group by и having
Группировка

//************************
Группировка по значениям в столбце open_emp_id (все повторяющиеся значения будут опущены)
SELECT open_emp_id
FROM account
GROUP BY open_emp_id;

//************************
Отфильтровывает по столбцу how_many всех сотрудников, у которых больше 4х счетов
SELECT open_emp_id, COUNT (*) how_many
FROM account
GROUP BY open_emp_id
HAVING COUNT(*) > 4;

//************************
Для выбора только уникальных значений используется DISTINCT
SELECT COUNT(DISTINCT open_emp_id)
FROM account;

//************************
Группировка по нескольким значениям
SELECT product_cd, open_branch_id,
	SUM(avail_balance) tot_balance
FROM account
GROUP BY product_cd, open_branch_id;

//------------------------------------------------------------------------------------------


Блок order by
механизм сортировки результирующего набора на основе данных столбцов, или выражений, использующих данные столбцов

//************************
SELECT open_emp_id, product_cd
FROM account
ORDER BY open_emp_id; //фильтрация только по значениям в столбце open_emp_id

SELECT open_emp_id, product_cd
FROM account
ORDER BY open_emp_id, product_id; //фильтрация только по значениям в столбце open_emp_id и product_id

//************************
Порядок сортировки

	- По убыванию(DESC)
	SELECT account_id, product_cd, open_date, avail_balance
	FROM account
	ORDER BY avail_balance DESC
	- По возрастанию (ASC)

//************************
Сортировка с помощью выражений
	SELECT cust_id, cust_type_cd, city, state, fed_id
	FROM customer
	ORDER BY RIGHT(fed_id, 3);//сортировка по 3м последним значениям в столбце fed_id

//************************
Сортировка с помощью числовых значений
	SELECT emp_id, title, start_date, fname, lname
	FROM employee
	ORDER BY 2, 5;


//------------------------------------------------------------------------------------------


Обновление данных

UPDATE (name)
SET (table_name) = (value)
WHERE (table_name) = (value);

UPDATE person
SET address = '1225 Tremont St.',
	city = 'Boston',
	state = 'MA',
	country = 'USA',
	postal_code = '02138'
WHERE person_id = 1;


//------------------------------------------------------------------------------------------


Удаление данных

DELETE FROM (name)
WHERE (table_name) = (value);

DELETE FROM person
WHERE person_id = 2;


//------------------------------------------------------------------------------------------


Использование псевдонимов

SELECT e.emp_id, e.fname, e.lname,
	d.name debt_name
FROM employee e(псевдоним) INNER JOIN department d(псевдоним)
	ON e.debt_id = d.dept_id

//------------------------------------------------------------------------------------------


Соединение таблиц
Выбрать значения (e.fname, e.lname, d.name)
ИЗ (employee) и СОЕДИНИТЬ С (department)
ПО (e.dept_id) = (d.dept_id)

SELECT e.fname, e.lname, d.name
FROM employee e JOIN department d
ON e.dept_id = d.dept_id;

//************************
Если имена столбцов совпадают

SELECT e.fname, e.lname, d.name
FROM employee e INNER JOIN department data
USING (dept_id);

//************************
Соединение 3х таблиц

SELECT a.account_id, c.fed_id, e.fname, e.lname
FROM customer c INNER JOIN account a
	ON a.cust_id = c.cust_id
	INNER JOIN employee e
	ON a.open_emp_id = e.emp_id
WHERE c.cust_type_cd = 'B';

//************************
Неэквисоединение

SELECT e.emp_id, e.fname, e.lname, e.start_date
FROM employee e INNER JOIN product p
	ON e.start_date >= p.date_retired
		AND e.start_date <= p.date_retired
WHERE p.name = 'no-fee checking';

//************************
Левостороннее и правостороннее внешнее соединение(outer join)
(внешнее соединение включает все строки одной таблицы и вводит данные второй таблицы только в случае обнаружения соотвествующих строк)

SELECT a.account_id, a.cust_id, b.name
FROM account a LEFT OUTER JOIN business b
	ON a.cust_id = b.cust_id;


//------------------------------------------------------------------------------------------


Оператор union
позволяет комбинировать несколько таблиц

SELECT cust_id, lname name
FROM individual
UNION ALL
SELECT cust_id, name
FROM business;


//------------------------------------------------------------------------------------------


Оператор intersect
для вполнения пересечений таблиц, у которых есть пересечения

SELECT emp_id, fname, lname
FROM employee
INTERSECT
SELECT cust_id, fname, lname
FROM individual;


//------------------------------------------------------------------------------------------


Оператор except
возвращает первую таблицу за вычетом всех перекрытий со второй таблицей

SELECT emp_id
FROM employee
WHERE assigned_branch_id = 2
	AND (title = 'Teller' OR title = 'Head Teller')
EXCEPT
SELECT DISTINCT open_emp_id
FROM account
WHERE open_branch_id = 2;


//------------------------------------------------------------------------------------------


Выражение case
CASE
	WHEN employee.title='Head Teller'
		THEN 'Head Teller'
	WHEN employee.title = 'Teller'
		AND YEAR(employee.start_date) > 2004
		THEN 'Teller Trainee'
	WHEN employee.title = 'Teller'
		AND YEAR(employee.start_date) < 2003
		THEN 'Experienced Teller'
	WHEN employee.title = 'Teller'
		THEN 'Teller'
	ELSE 'Non-Teller'
END

//------------------------------------------------------------------------------------------

Специальные функции

quote() - заключает  в кавычки всю строку и добавляет знаки экранирования символа к любой одинарной кавычке/апострофу
concat() - оператор конкатенации
length() - длина строки
locale() - месторасположение строки
insert() - принимает четыре аргумента (исходная строка, начальное положение, число символов для замены, замещающая строка ) - для oracle replace()





