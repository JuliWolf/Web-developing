// POSIX (англ. Portable Operating System Interface — переносимый интерфейс операционных систем) — набор стандартов, описывающих интерфейсы между операционной системой и прикладной программой (системный API), библиотеку языка C и набор приложений и их интерфейсов. Стандарт создан для обеспечения совместимости различных UNIX-подобных операционных систем и переносимости прикладных программ на уровне исходного кода, но может быть использован и для не-Unix систем.

// Ядро windows - микропроцессор (микроядро)

// Все операции ввода вывода производятся через ядро

/*«Философия Unix гласит:
    Пишите программы, которые делают что-то одно и делают это хорошо.
    Пишите программы, которые бы работали вместе.
    Пишите программы, которые бы поддерживали текстовые потоки, поскольку это универсальный интерфейс».*/


/*
Unix Way

____________________________________

____________________________________
Basic Software - системное програмное обеспечение (компилятор C)
------------------------------------
Shell  |        FS
(Bourne Shell           sh)
(Bourne Again Shell     bash - born again shell)
(C Shell                csh tcsh)

Shell (шелл, он же «командная строка», он же CLI, он же «консоль», он же «терминал», он же «черное окошко с белыми буковками») -- это текстовый интерфейс общения с операционной системой (ну, строго говря, это программа, которая таковой интерфейс обеспечивает, но сейчас это различие несущественно).

------------------------------------
Ядро Linux - Unix kernel */

/***************************************************/
//____________________________________
 // формат командной строки
// command [options] [arguments]

//____________________________________
//количество возможных аргументов
// getconf ARG_MAX

//____________________________________
// вывод текста в консоль
// arg1=Hello
// arg2=World
// echo $arg1 $arg2

//____________________________________
// Присваивание значения из нескольких слов
// arg1="Hello World"
// arg1=Hello\ World

//____________________________________
//вывод переменных с текстов
// echo "$arg1 Hello World"

//____________________________________
// Список файлов
// * 0 и более
//Заканчивающийся на
// echo s*
//Начинающийся на
// echo D*

//____________________________________
// соответствует только одному символу
// ?

//____________________________________
// соответствует любому одному символу за исключением f,g,s
// [fgh]

//____________________________________
// Инвертирование
// [^fgh]

//____________________________________
// Найти совпадение ^
// [a-z^-]

//____________________________________
// touch - открыть, создать файл(если нет)

//____________________________________
// абсолютный путь
// echo $PATH

//____________________________________
// все переменные окружения
// env

//____________________________________
// найти текущее положение
// pwd

//____________________________________
// Экспортировать переменную в переменную окружения
// export arg1

//____________________________________
// удалить переменню из переменных окружения
// unset arg1

//____________________________________
// Просмотреть все файлы в теущей директории
// ls

//____________________________________
//все файлы видимые и нет
// ls -a -i

//____________________________________
// аргументы и команды
// ls -a -i D*

//____________________________________
// ключ -i на каком сетевом интерфейсе слушать интерфейся
// tcpdump -i ech0 -tn

//____________________________________
// ключи gnu
// ls -l --h bin
// ls -l --human-readable /bin/bash
// ls -l --prefic=/urs /bin/bash

//____________________________________
// определить тип команды
// type ...
// type echo


// INODE - В информатике inode (произносится а́йнод или ино́д), индексный дескриптор — это структура данных в традиционных для ОС UNIX файловых системах (ФС), таких как UFS, ext4. В этой структуре хранится метаинформация о стандартных файлах, каталогах или других объектах файловой системы, кроме непосредственно данных и имени.

//____________________________________
// . - текущий каталог
// .. - каталог на уровень выше

//____________________________________
//виды файлов
// 1. Регулярные (-, f)
// 2. Файл каталога (d)
// 3. Файлы устройств (символьные, блочные) (b)
// 4. Символьная ссылка(ярлык) (c)
// 5. FIFO (точка встречи внутри файловой системы для клиент-сервер)
// 6. Socket (s)

//____________________________________
// ~ - домашний каталог
// echo ~

//____________________________________
// cчитывание внутренностей файла и вывод на экран
// cat

//____________________________________
// просмотр истории команд
// history

//____________________________________
// Повторить команду
// !66 (!+ номер команды)
// !-6(команда с конца)

//____________________________________
// найти команду похожую
// !ech (найдет первую команду и выполнит ее)

//____________________________________
//программы для чтения файлов\
// less
// more

//____________________________________
//программа для просмотра подробной информации
// man

//____________________________________
// cd - переход по каталогам
// cd ~  в домашнюю директорию
// cd -  вернуться в предыдушую директорию

//____________________________________
//touch
// создание файла или изменение его временных меток

//____________________________________
// mkdir - создание каталога
// mkdir [путь]
// mkdir -p d1/d2/d3/d4 - создание множества вложенных каталогов

//____________________________________
// rmdir - удаление каталога
// rmdir - не удаляет каталог если он не пустой

//____________________________________
// rm - удаление файлов
// rm -r- удаление файлов рекурсивно
// rm -v - удаляет файл и оставляет комментарий
// rm -vi - удаляет файл интерактивно
// rm -ri - интерактивное и рекурсивное удаление файлов и каталогов

//____________________________________
// cp -копирование файлов из каталога в каталог
// cp /etc/services test/f4
// cp - r test test1 - копирование катлога рекурсивно
// cp -i ff3 test/f1 - копирование содержимого файла интерактивно
// cp -vu test/f* test1/ - копирование файлов только если они отличаются

//____________________________________
// cat/tac построчно считывает файл и вывод на экран
// cat -n - с нумерованием строк

//____________________________________
//suo su -s - зайти как супер пользователь
// logout // выход из режима суперпользователя

//____________________________________
// mount - список смонтированных дисков/ монтирование файловых систем

//____________________________________
// ctrl d - выйти из режима, закрыть консоль

//____________________________________
// fdisk -l посмотреть информацию о дисках (под суперпользователем)
// fdisk /dev/sdb - работать с конкретным диском
// n - добавить новый дисковый раздел

//____________________________________
// mkfs.[что] [где] - форматирование диска
// mkfs.est4 /dev/sdb1

//____________________________________
// which - путь нахождения файла
// mlocate - нахождение значения в файлах(по ключам)

//____________________________________
// find - поиск файла(ходит по папка и ищет)
// find - можно найти файлы и совершить над ними действие
// find -type f -a -size 216854c -exec chmod 777 {} \;


/*************************************************/
// Стандартные потоки ввода -вывода

// Стандартные потоки
// 1. Стандартный ввод (stdin) клавиатура
// 2. стандыртный вывод (stdout)
// 3. стандыртный вывод ошибок (stdrr)

//____________________________________
// cat >testfile - создать файл и записыать текст в него
// ls -l /bin > testfile - записать содержимое в файл
// ls -l /bin >> testfile  добавить содержимое в конец файла
// wc -l <testfile - узнать сколько строк
// ls /bin > testfile - записать результат в файл

// ls /bin/err 2> testfile - если ошибка, то не выведет ее на экран, а запишет ее в файл

// 2>errfile >testfile ls /bin/err - ошибки в один файл, остальное в другой

// Конвеер
// p1 | p2 | p3 | p4
// выполняет программы поочередно

/*************************************************/
// Команды для работы с файлами

// 1. df - отчет об использовании дискового пространства
// 2. du - оценка места на диске, занимаемого файлами и каталогами
// 3. sort - сортировка строк в текстовых файлах
// 4. cut/paste - работа с секциями файлов (вырезать/вставить)
// 5. head/tail - вывод (первых/ последних) строк файла на стандартный вывод
// 6. wc - подстчет (размер файла, числа символов, слов, строк)
// 7. tr - замена символов по шаблону
// 8. dd - преобразовать и копировать файл
// 9. tee - трансляция stdin в stdout с ведением лога

//____________________________________
// cat -n head /etc/services | head
// cat -n head /etc/services | tail -n 3 - пронумеровать и вывести 3 последние строчки
// cat -n head /etc/services | tail -n +580 - печатать все строчки начиная с 580 строки
// cat -n head /etc/services | head -n -300 - весь head за исключением последних 300 строк
// cat -n head /etc/services | tail -n +500 | head -n -86 - вывести строки с 500 по 505


//____________________________________
// ls -l | cut -c1,2,3,4-12,28-80 - вывести строки с 1-12 + 28-80
// tail /etc/passwd | cut -f 1,3 -d : - разделить текст по : и вывести только 1 и 3ю

//____________________________________
// cat /etc/services | sort | less - сортировка построчно в алфавитном порядке
// cat /etc/services | sort -r | less - сортировка построчно с конца алфавита
// cat /etc/services | sort -k2 -n | less - сортировка по второму полю нумерологически

//____________________________________
// cat test | sort | uniq -c - отсортировать и вывести количество повторющихся строк
// cat test | sort | uniq -c -d - вывести только список с повторяющимися строками

//____________________________________
// tail /etc/passwd | tr : '\t' - заменить : на табуляцию

// cat /etc/passwd | tr -s ouw | less - сжать двойные буквы (oo, uu, ww)

// man man | tr -s '\n' | less - удалить пустые строки

// tr a-z A-Z - все строчные символы заменить на заглавные

//____________________________________
// wc /etc/passwd
// wc -l /etc/passwd /etc/services - только количестао строк
// wc -w /etc/passwd /etc/services - только количество строк

//____________________________________
// grep по умолчанию использует BRE стандарт
// ERE - расширенный стандарт регулярных выражений

// cat /etc/services | grep -v ssh - то, что не соответствует шаблону

// * // повтор предыдущего символы 0 или более раз
// . // любой 1 символ
// + // соответствует повтору предыдущего символа 1 или более раз (ERE)
// + // соответствует шаблону r+ (BRE)
// ? // соответствует повтору предыдущего символа 0 или 1 раз
// [a-zA-Z] // диапазон
// ^ // внутри диапазон инвертирует смысл
// ^ // вне диапазона - начало строки
// $ // конец строки
// {n,m} // повтор предыдущего символа не менее n и не более m раз

// grep '^ *#define.*" *.c *.h
// grep -E "(^|[[:space:]])[1-9][0-9]{1,2}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}([[:space:]]$)"


/*************************************************/
// PID                           PID
// PPID -------> fork() -------> PPID
// tty                           |
// |                             |
// |                             |
// wait()                        exec
// |                             |
// |                             |
// |                             PID
// |  Z <-------- exit() <------ PPID

// PID // Process Identifier (никогда не повторяются)
// PPID // Parent PID (init - PID = 1)
// UID  // процессор пользователя
// tty // тилитайпный аппарат

// родительский процесса запускает дочерний(fork) и засыпает(wait)
// дочерний работает(exec)

// top // Для просмотра процессов
// ps

/*************************************************/
// Добавление нового пользователя
// adduser
// useradd -C "настоящее имя пользователя"

// psasswd // смена пароля суперпользователя
// passwd name // смена ппароля пользователя

// usermod -L test // заблокировать пользователя test
// usermod -U test // разблокировать пользователя test

// /etc/group // файл групп пользователей

// userdel -r test // удалить пользователя изо всех групп и все папки

// каждый пользователь системы может состоять в нескольких группах

// id // посмотреть группы пользователя


/*************************************************/
// Режим доступа

// u -user g-group o-other a

// 3 права для каждого вида
// r -read w-write x-act

/*
0 0 0  0
0 0 1  1
0 1 0  2
0 1 1  3
1 0 0  4
1 0 1  5
1 1 0  6
1 1 1  7
*/

// Изменение режима доступа
// chmod 777 filename
// chmod a-x f3 // отобрать у всех пользователей права
// chmod u+r f3 //добавить пользователю право на чтение
// chmod u+w,g+r f3
// chmod o=rwx f3 // для всех остальных дать все права
// chmod o-x f3 // у остальных забрать правао на исполнение

// umask // параметрый которые отнять  при создании каталогов, при создании файлов обнуляет еще параметр на исполнение

// теневое хранение паролей /etc/shadow


/*************************************************/
// Алгоритмы шифрования паролей

// до 2010 MD5
// после SHA256

// SUID(4) - программы выполняются с правами хохяина файла
// SGID(2) -  программы выполняются с правами группы файла.
    // Для директорий - создаваемые файлы принадлежат группе, которой принадлежит директория
// Sticky bit(1) - в директории файл может удалить только его хозяин (tmp)

// chmod 7777 ff5 // дать все suid
// chmod a-x ff5 // забрать все suid

// hown root ~juliwolf/ff5 // смена владельца файла (только суперпользователь)

// chgrp lpadmin ff3 // поменять группу файла


/*************************************************/
// Загрузка

/*
Power On Self-Test (POST)
Master Boot Record (MBR)
Boot sector (/dev/hdaX или /dev/sdaX)
Загрузчик ОС (grub, lilo, ntloader...)
Ядро
Процесс init (PID=1)
Система инициализации (BSD, System V, Upstart)
Стартовые скрипты
    Инициализация раздела подкачки
    Проверка ФС и их переподключение
    Загрузка модулей ядра
    Запуск системных сервисов
*/


// init 0 // полная остановка системы (перевод на 0 уровень системы)
// shutdown // запланированное время остановки (с предупреждением)
// reboot

// runlevel // узнать на каком уровне работает система

//____________________________________
// Управление модулями

// lsmod // какие модули ядра сейчас использует система

// modprobe -l // список модулей

// moninfo modulename// информация о мудуле

// sudo modprobe nls_koi8-r //добавить модуль
// sudo modprobe -r nls_koi8-r //удалить модуль

// uname //какое ядро работает
// uname -r //релиз ядра
// uname -a // подробная информация
// ls /lib/modules/ //нахождение модулей ядра


/*************************************************/
// Сеть

// URL - unicode resourse locator // ссылка (протокол, имя рекурса)

// Интерфейс - совокупность программ, позволяющим нам пользоваться услугами сети
// Реальные и Виртуальные

// ifconfig // просмотр всех сконфигурированных устройств
// ifconfig -a // просмотр всех устройств

// MTU - maximum transmission unit//максимальный размер полезного блока данных одного пакета

// ifconfig enp4s0 10.3.1.160/24 up// поднять

// netstart -rn
// ping www.ya.ru

// /etc/network/inerfaces // настройки сети
//     auto enp4s0
//     inface enp4s0 inet dhc
//     address =
//     netmask = 255.255.255.0
//     gateway =


//____________________________________
// Сигналы

 // kill -l // список сигналов
// echo $$ //узнать pid

// ./p3 & // Запустить процесс в фоновом режиме
// sleep 5 & //заснуть на 5 секунд в фоновом режиме
// (sleep 5 ; date) & date //заснет, выполнит дату после & , потом выполнит дату внутри скобок

// traceroute www.kernel.org // просмотреть путь пакето к сайту


/*************************************************/
// Сжатие файлов

//____________________________________
// программы для сжатия файлов
// compress
// gxip
// bzip2

// gzip services // зжать файл
// gunxip -v services.gz // распаковать файл
// gunzip -c services.gz || less // просмотреть файл без распаковки

//____________________________________
// программы архиваторы
// ar
// tar
// cpio

// tar cz // сжать и заархифировать
// sudo tar czvf etc.tar.gz /etc
// tar tf etc.tar.gz // проверить на целостность
// tar xf etc.tar.gz etc/services // извлечь конкретный файл
// tar xf etc.tar.gz // разархивировать всю папку

//____________________________________
// Управление пакетами

// apt-get update // скачать все актуальные пакеты
// apt-get upgrade // установить все актуальные пакеты(обновить систему)
// apt-get upgrade links // обновить только один пакет
// apt-get install packagename // установить определенный пакет
// apt-get remove packgename // удалить пакет
// apt-get purge packagename // удалить пакет со всеми конфигурационными файлами
// apt-get autoremove // удаить все неиспользуемые пакеты

// apt-cache search browser // просмотреть пакеты связанные с browser
// dpkg -l links // узнать установлен ли пакет