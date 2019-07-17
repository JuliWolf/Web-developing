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

