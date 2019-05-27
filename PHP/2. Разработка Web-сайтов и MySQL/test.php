<?


// *******************************************************************************************************


/*----------Cookie----------*/

/*----------Манипуляция----------*/

// Создание временной cookie
// cookie будет сохранено пока открыт браузер
// Первый параметр - имя
// Второй параметр - значение
// setcookie("name", "John");

// Создание долговременной cookie
// третим параметром можно передать временную метку, когда данные сотрутся
// setcookie("name", "John", time()+3600);

// Указание времени и места доступа
// Четвертым параметром передается путь доступа 
// setcookie("name", "John", time()+3600, "/docs");

// Доступно только для поддтометов
// Пятым параметром передается имя поддомена, которому доступны cookie
// setcookie("name", "John", time()+3600, "/", ".example.com");

// Указание защиненного соединения как условия для cookie
// Шестой параметр указывает на то, что значение cookie должно передаваться от клиента по защищенному соединению HTTP
// setcookie("name", "John", time()+3600, "/", ".example.com", true);

// Cookie доступные только через HTTP - протокол
// Седьмой параметр - булев тип
// setcookie("name", "John", time()+3600, "/", ".example.com", false, true);

// Cookie должно отправляться до того, как информация будет выводится на страницу

// Чтение cookie
// echo $_COOKIE["userName"];

// Удаление cookie
// setcookie("name", "John", 1);

// setcookie("name");
// setcookie("name", "");
// setcookie("name", false);

// Сохранение данных cookie в массив
// $user= [
// 	'name' => 'John',
// 	'login' => 'root',
// 	'password' => '1234'
// ];
// $str = serialize($user);
// // echo $str;// a:3:{s:4:"name";s:4:"John";s:5:"login";s:4:"root";s:8:"password";s:4:"1234";}
// setcookie("user", $str);

// $user = unserialize($_COOKIE["user"]);
// print_r($user);//Array ( [name] => John [login] => root [password] => 1234 )


// Для сохранения целостности
// $str = base64_encode(serialize($user));
// setcookie("user", $str);

// $user = unserialize(base64_decode($_COOKIE["user"]));
// print_r($user);


// *******************************************************************************************************


/*----------Заголовки----------*/

// Переадресация по статусу 302
// Предполгалается, что сайт временно переехал, может еще вернуться
// header("Location: http://mysite.local");

// Переадресация со статусом 301
// Переезд сайта на постоянно
// header("HTTP/1.1 301 Moved Permanently");
// header("Location: http://mysite.local");

// header("Location: http://mysite.local", true, 301);

// Перезапрос ресурса
// Передавайемый параметр - количество секунд
// header("Refresh: 3");
// header("Refresh: 3; url=http://mysite.local");


/*----------Тип содержимого----------*/

// Принудительная установка типа передаваемого ресурса
// header("Content-Type: text/xml");

// Принудительная установка кодикорвки передаваемого ресурса
// Если в заголовек пришел Content-Type, то Content-Type, который указывается в header(html) не будет учитываться
// Если в заголовек пришел charset, то charset, который указывается в header(html) не будет учитываться
// header("Content-Type: text/html; charset=utf-8");

// Перенаправление вывода передаваемых данных
// header("Content-type: file/octet-stream");
// header("Content-disposition: attachment; filename=\"mytext.txt\"");


/*----------Кеширование----------*/

// Запрет кеширования
// Запрет кеширования после сеанса
// header("Cache-Control: no-cache, max-age=0");

// Полный запрет кеширования
// Запрет кеширования даже во время сеанса
// header("Cache-Control: no-store");

// Разрешение кэширования на один час относительно времени запроса
// Время указано в секундах
// header("Cache-Control: max-age=3600");

// Разрешения кеширования на один час
// header("Expires: " . date("r", time() + 3600));


/*----------Буферизация----------*/

// Сохранение всего контента, который должен отображаться до того момента, пока все заголовки не отправятся

// Включить буферизацию
// ob_start();
// echo "Hello World!";
// setcookie("name", "John");

// Посылаем содержимое буфера
// ob_flush();

// echo "Еще контент!"ж
// echo "И еще контент!";

// Посылаем содержимое буфера и отключаем его
// ob_end_flush();


// Включаем буферизацию
// ob_start();

// echo "Hello ";

// Выбираем то, что находится в буфере. Его содержимое не очищается!
// $out1 = ob_get_contents();

// echo "World";

// Выбираем то, что находится в буфере. Его содержимое не очищается!
// $out2 = ob_get_contents();

// А теперь очищаем буфер, но не закрываем
// ob_clean();

// echo "Саша";
// echo " и ";
// echo "Маша";

// Выбираем то, что находится в буфере
// $out3 = ob_get_contents();

// Очищаем буфер и закрываем его
// ob_end_clean();

// echo $out1; // Hello
// echo $out2; // Hello World
// echo $out3; // Саша и Маша


/*----------Хеширование----------*/

// Мехашизм одностороннего шифрования

// echo md5("password");// 5f4dcc3b5aa765d61d8327deb882cf99
// echo sha1("password");// 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8

// Генерация хеша с солью
// echo md5("password". "kgkjdfghiero5645634");//24553b537bbd0069f5b07968545cd535

// echo crypt("password");

// Генерация стойкого хеша со случайной солью
// $hash = password_hash("password", PASSWORD_DEFAULT); // Не рекомендуется
// $hash = password_hash("password", PASSWORD_BCRYPT); // Рекомендуется

// Проверка пароля
// $pass = "password";
// if(password_verify($pass, $hash))
	// echo "OK";


// *******************************************************************************************************


/*----------Использование сеансов----------*/

// Кратковременное хранение информации
// Сессия - это файл с уникальным идентификатором

/*----------Управление сенсами----------*/

// Создание и(или) доступ к сессии
// session_start();

// Запись в сессионную переменную
// $_SESSION['name'] = "John";

// Чтение из сессионной переменной 
// echo $_SESSION['name'];

// Очистка сессионных переменных
// Файл не удаляется, только очищается от данных
// session_destroy();

// Принудительное удаление сессионной cookie
// setcookie(session_name(), session_id(), time()-3600);


/*----------Доп. параметры для управления сессией----------*/

// session.auto_start = 0

// ini_set('session.name', 'PHPSESSID');
// // Указание, где хранить файлы сессии
// ini_set('session.save_path', '');
// ini_set('session.gc_maxlifetime', '1440');
// ini_set('session.cookie_lifetime', '0');
// ini_set('session.cookie_httponly', '');
// ini_set('session.cookie_path', '/');


// *******************************************************************************************************

/*----------Работа с файлами----------*/

/*----------Полезные функции----------*/

// Проверка файлов и директорий на существование
// if(file_exists("file.txt")){
// 	echo "Файл или директория существует";
// }
// if(is_file("file.txt")){
// 	echo "Файл существует";
// }
// if(is_dir("images")){
// 	echo "Директория существует";
// }

// // Размер файла
// echo "Длина файла file.txt: ".filesize("file.txt");

// // Время изменения и доступа к файлу
// echo "Файл file.txt был изменен: " . filemtime("file.txt");
// echo "и запрошен: " . fileatime("file.txt");

// // Что можно с файлом сделать? 
// if(is_readable("file.txt")){
// 	echo "Файл можно читать";
// }

// if(is_writable("file.txt")){
// 	echo "В файл можно писать";
// }

// if(is_executable("file.txt")){
// 	echo "Файл можно исполнять";
// }


/*----------Работа с потоками----------*/

// Открытие потока на чтение и получение его дескриптора
// Приходит некий идентификатор (тип - ресурс)
// $f = fopen("file.txt", "r") or die("Не могу открыть файл");

// // Закрытие потока
// fclose($f);

// // Открытие потока на чтение и запись
// $f = fopen("file.txt", "r+");

// // Открытие потока на запись. Указатель помещается в конец файла
// $f = fopen("file.txt", "a");

// // Открытие потока на чтение и запись. Указатель помещается в конец файла
// $f = fopen("file.txt", "a+");

// // Открытие потока на запись. Файл обрезается до нулевой длины 
// $f = fopen("file.txt", "w");

// // Открытие потока на чтение и запись. Файл обрезается до нулевой длины 
// $f = fopen("file.txt", "w+");


// // Читаем файл кусками
// $f = fopen("file.txt", "r");

// // Читаем первые 5 байт из потока
// echo fread($f, 5);

// // Читаем следующие 3 байта из потока
// echo fread($f, 3);
// // Выводим все с текущей позиции до конца
// fpassthru($f);
// fclose($f);

// Читаем файл построчно в массив
// $f = fopen("file.txt", "r");
// $lines = [];
// while($line = fgets($f)){
// 	$lines[] = $line;
// }
// fclose($f);

// Читаем файл построчно в массив и вырезаем html-тэги, оставляя нужные 
// $f = fopen("file.txt", "r");
// $lines = [];
// // второй параметр - длина строки
// // третий параметр - исключение тегов(какие оставить)
// while($line = fgetss($f, 4096, "<p><br>")){
// 	$lines[] = $line;
// }
// fclose($f);

// Читаем файл побайтово в массив 
// $f = fopen("file.txt", "r");
// $bytes = [];
// while(!feof($f)){
// 	$bytes[] = fgetc($f);
// }
// fclose($f);

// Пишем файл
// $f = fopen("file.txt", "r+");
// fwrite($f, "Новый текст", 25);
// fclose($f);

// Пишем в конец файла 
// $f = fopen("file.txt", "a");
// fputs($f, "\nНовая строка");
// fclose($f);

// Читаем последние 10 байт из потока
// $f = fopen("file.txt", "r");
// // Устанавливаем указатель в нужную позицию
// // отсчитать с конца
// fseek($f, -10, SEEK_END);
// // В какой позиции мы находимся
// echo ftell($f);
// // Читаем дальше
// echo fread($f, 10);
// // Устанавливаем указатель в начало потока
// rewind($f);
// fclose($f);


/*----------Прямая работа с файлами----------*/

// Читаем весь файл напрямую в буфер вывода
// readfile("file.txt");
// // что и
// $f = fopen("file.txt", "r");
// echo fread($f, filesize("file.txt"));
// fclose($f);

// Читаем файл построчно в массив
// $lines = file("file.txt");
// // Что и
// $f = fopen("file.txt", "r");
// while ($lines[] = fgets($f));
// fclose($f);

// Получаем весь файл в виде строки
// $file = file_get_contents("file.txt"); 
// // Что и
// $f = fopen("file.txt", "r");
// $file = fread($f, filesize($file.txt));
// fcolse($f);

// Пишем файл затирая содержимое
// file_put_contents("file.txt", "Новое содержимое");
// // Что и
// $f = fopen("file.txt", "w");
// fputs($f,"Новое содержимое");
// fcolse($f);

// Пишем в файл добавляя содержимое в конец
// file_put_contents("file.txt", "Новое содержимое", FILE_APPEND);
// // Что и
// $f = fopen("file.txt", "a");
// fputs($f,"Новое содержимое");
// fcolse($f);


/*----------Управление файлами----------*/

// Копируем файл
// copy("source.txt", "destination.txt");

// Переименовываем файл
// rename("old.txt", "new.txt");

// Удаляем файл
// unlink("file-to-delete.txt");


/*----------Работа с директориями----------*/

// Директория - это файл с ссылками на файлы

// Создание директории
// mrdir("newdir");

// Удаление директории
// удаляется только пустая
// rmdir("dir-to-delete");

// Имя текущей директории
// echo getcws();


// Заходим в текущую директорию
// $dir = opendir(".");

// // Читаем содержимое директории
// while ($name = readdir($dir)){
// 	if($name == '.' or $name == '..')
// 		continue;
// 	if(is_dir($name)){
// 		echo '['. $name .' ]<br>';
// 	}else{
// 		echo $name . '<br>';
// 	}
// }
// // Выходим из директории
// closedir($dir);

// Читаем содержимое директории в массив
// $dir_content = scandir(".");

// Читаем определенное содержимое директории в массив
// $dir_txt+content = glob("*.txt");


/*----------Загрузка файлов на сервер----------*/

// Настройки PHP.INI
// file_uploads = "1"
// upload_max_filesize = "2M"
// // максимальный размер данных посылаемый из формы методом "POST"
// post_max_size = "8M"
// // Количество загружаемых файлов одновременно
// msx_file_uploads = 20
// // Место временной папки, в которую складываются файлы, до отправки на сайт
// oupload_tmp_dir = 
// max_input_time = "-1"
?>

<!-- Обязательно указать метод "POST" и enctype "multipart/form-data"-->
<!-- Загруженные файлы попадают в суперглобальный массив $_FILES -->
<!-- <form enctype = "multipart/form-data" method="POST" action="">
	<input type="hidden"  name="MAX_FILE_SIZE" value="4096" /> 
	<input name="userfile" type="file" />
	<input type="submit" />
</form> -->

<?
// if ($_FILES["userfile"]["error"] != UPLOAD_ERR_OK){
// 	switch ($_FILES["userfile"]["error"]){
// 		case UPLOAD_ERR_INI_SIZE:
// 			echo "Превышен максимально допустимый размер"; break;
// 		case UPLOAD_ERR_FORM_SIZE:
// 			echo "Превышено значение MAX_FILE_SIZE"; break;	
// 		case UPLOAD_ERR_PARTIAL:
// 			echo "Файл загружен частично"; break;
// 		case UPLOAD_ERR_NO_FILE:
// 			echo "Файл не был загружен"; break;
// 		case UPLOAD_ERR_NO_TMP_DIR:
// 			echo "Отсутствует временная папка"; break;
// 		case UPLOAD_ERR_CANT_WRITE:
// 			echo "Не удалось записать файл на диск"; break;
// 	}
// }else{
// 	echo "Размер загруженного файла: " . $_FILES["userfile"]["size"];
// 	echo "Тип загруженного файла: " . $_FILES["userfile"]["tyep"];
// 	// Загрузка загруженного файла из временной папки в нужную
// 	move_uploaded_file($_FILES["userfile"]["tmp_name"], "uploads/" . $_FILES["userfile"]["name"]);
// }


// *******************************************************************************************************


/*----------Отправка email----------*/

// // Директивы PHP.INI
// ini_set("SMTP", "localhost");
// ini_set("smtp_port", "25");
// ini_set("sendmail_from", "");

// $to = "vasya@mail.ru";
// $subject = "Проба пера";
// $body = "Отправляю письмо Васе";

// // Функция mail() возвращает булево значение
// if(mail($to, $subject, $body)){
// 	echo "Письмо отправлено";
// }else{
// 	echo "Письмо отправить не удалось";
// }

// // Дополнительные настройки
// $headers = "Content-Type:  text/html;charset=utf-8\r\n";
// $headers .= "To: Петя <petya@mail.ru>\r\n";
// $headers .= "Cc: lena@mail.ru\r\n";
// $headers .= "Bcc: sveta@mail.ru\r\n";
// $headers .= "From: Федя <fedya@mail.ru>\r\n";

// $body = "<h1> Отправляю письмо Васе и Пете </h1>";
// mail($to, $subject, $body, $headers);


// *******************************************************************************************************


/*----------СУБД----------*/

// Регуляционная модель ориентирована на организацию данных в виде двумерных таблиц
// Каждая таблица имеет свое имя
// Таблицы состоят из столбцов и строк
// Каждый элемент таблицы - один элемент данных
// Все ячейки в столбце таблицы имеют одинаковый тип
// Каждый столбец имеет уникальное имя
// Одинаковые строки в ьатаблице отсутствуют
// Порядок следования строк и столбцов может быть произвольным
// Запросы к базе данных возвращают результат в виде таблиц, которые могут выступать как объект запросов

// Требования к структуре базы данных
	// Проективрование БД - создание эффективной структуры данных, обеспечивающее хранение требуемой информации
		// Хорошая структура
			// - Максимально упрощает взаимодействие с БД
			// - Гарантирует непротиворечивость данных
			// - Выжимает максимум производительности из систем
		// Плохая структура
			// - Приводит к непониманию результатов выполнения запросов
			// - Повышает риск введения в БД противоречивой информации
			// - Порождает избыточные данные
			// - Усложняет выполнение изменений структуры созданных ранее и уже заполненных данных таблицы
	// Целостность базы данных (database integrity)
		// Соответствие имеющщейся в базе данных информации ее внутренней логике, структуре и всем явно заданным правилам
	// Нормализация
		// Процесс преобразования отношений базы данных к виду, отвечающему нормальным формам
	// Нормальная форма
		// Свойство отношения в реляционной модели данных, характеризующее его с точки зрения избыточности, которая потенциально может привести к логически ошибочным результатам выборки или изменения данных
		// Нормальная форма определяется как совокупность требования, которым должно удовлетворять отношение
		// Исключение некоторых типорв избыточности
		// Устранение некоторых аномалий обновления
		// Разработчка проекта базы данных, который интуитивно понятен и может служить хорошей основой для последующего расширения
		// Упрощение процедуры применения необходимых ограничений целосности


/*----------Таблицы----------*/

// Таблица находится в первой нормальной форме, если каждый ее атрибут атомарен и все строки различны. Под выражением "атрибут атомарен" понимается, что атрибут может содержать только одно значение

// Таблица во второй нормальной форме, если она находится в нормальной форме, и при этом любой ее атрибут, не входящий в состав первичного ключа, функционально полно и зависит от первичного ключа

// Значение первичного ключа должно быть уникально


/*----------SQL----------*/

// SQL (англ. Structured Query Language - язык структурированных запросов)
	// Универсальный язык, применяемый для создания, модификации и управления данными в реляционных базах данных
// Язык SQL делится на три части
	// Операторы определения данных (Data Definition Language, DDL)
	// Операторы манипуляции данных (DAata Manipulation Language, DML)
	// Операторы определения доступа к данным (Data Control Language, DCL)


/*----------Основные манипуляции данными----------*/

// Выборка данных

// В большинстве БД данные приходят в том порядке, в котором они были добавлены
// SELECT name FROM teachers

// Сортировка запрошенных данных
// SELECT name, addr, city
// 	FROM teachers
// 	ORDERS BY name

// SQL умеет читать операторы
// Отбор по длине
// SELECT title
// 	FROM courses
// 	WHERE length > 30

// "like" - позволяет использовать постановочные символы
// 'Web%' все, которые начинаются с 'Web'
// "*" можно использовать только в учебных целях, или для проверки(в личных целях)
// SELECT *
// 	FROM courses
// 	WHERE length > 30
// 	AND title LIKE 'Web%'

// Выборка уникальных значений
// Повторяющиеся значения не учитываются
// SELECT DISTINCT length
// 	FROM courses


// Вставка новой записи

// По стандарту используются одинарные кавычки
// INSERT INTO courses
// 	VALUE (NULL, 'PHP', '...', 40)

// // Только те поля, которые указаны
// INSERT INTO courses(title, length)
// 	VALUE ('PHP', 40)


// Удаление записи

// DELETE FROM lessons
// 	WHERE date = '2014-06-11'


// Изменение записи

// UPDATE teachers
// 	SET
// 		zarplata = zarplata * 2,

// 		premia = premia * 10
// 	WHERE name LIKE 'Иванов%'
// 		OR name LIKE 'Петров%'
// 		OR name LIKE 'Сидоров%'

// UPDATE teachers
// 	SET 
// 		zarplata = zarplata * 2,
// 		premia = premia * 10
// 	WHERE name INNER
// 		('Иванов', 'Петров', 'Сидоров')


/*----------Объединение таблиц----------*/

// Обращения к конкретной таблице необходимы для:
// 1. Если в таблицах используется одиннаковый идентификатор
// 2. Для уточнения данных, откуда берутся данные 
// 3. Псевдоными для упрощения чтения таблицы(teachers - t)

// SELECT t.name, t.code, l.courses
	// FROM teachers t //присвоение псевдонима 't' таблице 'teachers'
	// INNER JOIN lesson l ON t.id = l.tid //"Inner" не является обязательным для написания

// Сначала обрабьатвает как INNER JOIN, потом возращается в таблицу 'teachers' и берет оставшиеся значения
// SELECT t.name, t.code, l.courses
	// FROM teachers t
	// LEFT OUTER JOIN lessons l ON t.id = l.tid


/*----------Создание базы данных----------*/

// CREATE DATABASE news


/*----------Создание таблиц и полей----------*/

// CREATE TABLE items(
// 	id int NOT NULL auto_increment, 
// 	title varchar(255) NOT NULL default '',
// 	description varchar(255) NOT NULL default '',
// 	content text,
// 	author varchar(50) NOT NULL default '',
// 	pubdate timestamp NOT NULL default '',
// 	PRIMARY KEY (id)
// )


// *******************************************************************************************************


/*----------Сервер баз данных MySQL----------*/


/*----------Общие сведения----------*/

// Сервер баз данных MYSQL - один из самых распространенных серверов баз данных

// http://mysql.com

// Основные параметры по-умолчанию
// Порт: 3306
// Логин: root
// Парол: -


/*----------Конфигурация----------*/

// Конфигурационный файл my.ini
	// port = 3306
	// datadir =  "c:\\users\\public\\openserver\\userdata\\MySQL-5.5"
	// default-storage-engine = InnoDB
	// init-connect = "SET NAMES utf8"
	// interactive_timeout = 30
	// wait_timeout = 60
	// connect_timeout = 5


/*----------Программы для работы с СУБД MySQL----------*/

// GUI
	// MySQL Administrator
	// MySQL Query Browser
	// ESM MySQL Manager
	// другие
// Веб-приложение
	// www.phpmyadmin.net
// Утилиты командной строки
	// mysql.exe 
	// mysqldump.exe


/*----------Использование утилит командной строки----------*/

// Соединение с монитором MySQL
	// mysql -uлогин -pпароль

// Внимание! Внутри монитора MySQL надо явно указывать конец запроса (;)
	// USE: имя_БД
	// quit

// Экспорт базы данных
// 	mysqldump -uлогин -pпароль имя_БД Ю dump.sql

// Импорт базы данных
// 	mysql -uлогин -pпароль имя_БД < dump.sql


// *******************************************************************************************************

/*----------Использование сервера бах данных MySQL в приложениях PHP----------*/


/*---------Алгоритм работы с СУБЛ MySQL----------*/

// Подключение необходимого расширения в PHP.INI
// php_mysql.dll

// Установка соединения с сервером

// Выбор базы данных для работы(при необходимости)
// Исполнение запроса
// Обработка данных(при необходимости)
// Закрытие соединения


/*---------Соединение с сервером баз данных----------*/

// Принимает 4 параметра:
// Первый параметр - ip/имя сервера базы данных
// Второй параметр - логин
// Третий параметр - пароль
// Четвертый параметр - БД

// Приходит объект
// $link = mysqli_connect('localhost', 'root', '', 'web');


// Отслеживание ошибки соединения
// if(!$link){
// 	echo mysqli_connect_errno();
// 	echo "<br>";
// 	echo mysqli_connect_error();
// }

// Смена базы данных
// mysqli_select_db($link, "test");


// Отправка запроса
// Вернется булево значение
// $res = mysqli_query($link, "SET NAMES 'utf-8'");
// // Ошибка в SQД
// if(!res)
// 	echo mysqli_error($link);


// $sql = "SELECT * FROM teachers";

// В результате придет объект
// $result = mysqli_query($link, $sql);

// Закрытие соединения
// mysqli_close($link);

// Обработка резульата
// По умолчанию вторым параметром стоит "MYSQLI_BOTH"

// while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
// 	print_r($row);
// }

// Варианты обработки результата
	// $row = mysqli_fetch_array($result);
	// $row = mysqli_fetch_array($result,MYSQLI_BOTH); 
	
	// $row = mysqli_fetch_row($result); 
	// $row = mysqli_fetch_array($result,MYSQLI_NUM); 
	
	// $row = mysqli_fetch_assoc($result); 
	// $row = mysqli_fetch_array($result,MYSQLI_ASSOC); 


// // Полная выборка: массив массивов 
// $row = mysqli_fetch_all($result,MYSQLI_ASSOC);
// print_r($row);


/*---------Полезные функции----------*/

// Экранирование строк
// $name = mysqli_real_escape_string($link, "O'Brian");

// $sql = "SELECT * FROM teachers WHERE name = '$name'";
// echo $sql;

// Получаем первичный ключ новой записи
// Должен быть написан сразу после отбора
// $id = mysql_insert_id($link);

// $sql = "DELETE FROM lessons WHERE room = 'БК-1'";
// mysqli_query($link, $sql);//Возвращает булево значение

// Сколько записей изменено
// $count = mysqli_affected_rows($link);

// $sql = "SELECT * FROM courses";
// mysqli_query($link, $sql);

// Сколько записей вернулось
// $row_count = mysqli_num_rows($result);

// Сколько полей в вернувшихся записях
// $fields_count = mysqli_num_fields($result);


/*---------Опасность SQL - инъекций----------*/

// Внедрение в стоковые параметры
	// // Запрос
	// $sql = "SELECT * FROM news WHERE title LIKE('% $search_text%')"; 

	// // Инъекция
	// $search_text = "')+and+(author_id='1"; 

	// // Результат
	// $sql = "SELECT * FROM news WHERE title LIKE('%') AND (author_id='1%')";

// Расщепление запроса
	// // Запрос
	// $sql = "SELECT * FROM news WHERE id = $id"; 

	// // Инъекция
	// $id = "12;INSERT INTO admin(login, password) VALUES('HaCkEr', '1234')"; 

	// // Результат
	// $sql = "SELECT * FROM news 
	// 	WHERE id = 12;        
	// 	INSERT INTO admin(login, password) 
	// 	VALUES('HaCkEr', '1234')";

// Использование UNION
	// // Запрос
	// $sql = "SELECT id, title, author, date FROM news WHERE id = $id"; 
	// // Инъекция
	// $id = "-1 UNION SELECT 1, login, password, 1 FROM admin"; 

	// // Результат
	// $sql = "SELECT id, title, author, 
	// 	date FROM news 
	// 	WHERE id = -1        
	// 	UNION SELECT 1, login, password, 1 
	// 	FROM admin";

// Экранирование хвоста запроса
	// // Запрос
	// 	$sql = "SELECT title, author          
	// 	FROM news WHERE cat = $id AND title LIKE('% $search%')";

	// // Инъекция
	// 	$id = "-1 UNION SELECT login, password FROM admin--"; 

	// // Результат
	// 	$sql = "SELECT title, author FROM news WHERE cat = -1        UNION SELECT login, password FROM admin-        
	// 		AND title LIKE('%$search%')";

// Выполнение команд на сервере
	// // Запрос
	// 	$sql = "SELECT name FROM user WHERE id = $id"; 

	// Инъекция
		// $id = "1+UNION+SELECT+'<?eval($_GET[cmd]);'INTO+OUTFILE+'/www/cmd.php'--"; 

	// Исполнение искрипта
		 // http://example.com?cmd=passthru('ls')


/*---------Подготовленные запросы----------*/

// $sql = "INSERT INTO users(name, email, age) VALUES(?, ?, ?)";

// Уважаемый сервер, вот запрос - разбери его 
// $stmt = mysqli_prepare($link, $sql);

// Уважаемый сервер, вот параметры для запроса
// mysqli_stmt_bind_param($stmt, "ssi", $name, $email, $age);

// А теперь, исполни подготовленный запрос с переданными параметрами 
// mysqli_stmt_execute($stmt); 
// mysqli_stmt_close($stmt);


// *******************************************************************************************************






