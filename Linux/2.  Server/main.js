// Каталог, отвечающий за интерфейсы
// /etc/udev/

/*************************************************/
// Shell scripts

//____________________________________
// name=mike
// echo $name //mike

// env | grep $name

// export name
// env | grep $name

// surname=surname

// fullname=$name\ $surname //mike surname
// fullname="$name $surname" //mike surname
// fullname='$name $surname' //$name $surname

// a=`date`
// echo $a //Wed Jul 10 21:27:03 MSK 2019

// $0 // название текущего исполняемого файла
// $$ //номер текущей оболочки

// scp student@10.10.104:s[12] . //скопировать файлы с именем типа s1 bkb s2 с пользователя student на машине 10.10.104


/*************************************************/

// Система точного времени

// date // узнать время
// date -s // изменить время

// UTC = GMT

// /etc/init.d/ntp start
// pgrep -l ntp // проверка работы демона

// ntptrace


/*************************************************/

// FTP - протокол передачи данных

// File transfer protocol
// Не шифрует файлы


// Openssl
// openssl req -new -x509 -days 365 -nodes -out /etc/proftpd/ssl/proftpd.cert.pem -keyout /etc/proftpd/ssl/proftpd.key.pem


/*************************************************/

// Специальные переменные
// basename ../../../home/stident/s1 //s1

// $0 $1 ... $9 //позиционные переменные
// $* $@ // все переменные командной строки
// $# // количество параметров командной строки
// $? // код возврата программы
// $! // PID программы, запущенной в background режиме
// $$ // PID процесса shell


// for
// for i in 1 2 3 4
// do
//     echo $i
// done

// seq
// seq 1 5 // выведет от 1 до 5
// seq 20 -3 5 // выведет 5 чисел начиная от 20 до 5 вычитая из низ 3

// выведет все числа от 2 до 10 умноженные сами на себя
// for i in `seq 2 10`
// do
//     echo $i : $(( $i*$i ))
// done


//Resolver <- DNS (находится в библиотеке)

// ping -> gethostbyname(...)
// ya.ru.d0.class.un.

// cat /etc/resolv.conf

// FQDN (от англ. Fully Qualified Domain Name — «полностью определённое имя домена», иногда сокращается до «полное имя домена») — имя домена, не имеющее неоднозначностей в определении. Включает в себя имена всех родительских доменов иерархии DNS.

// cat /etc/nsswitch.conf