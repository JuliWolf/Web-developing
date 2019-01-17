<?
// Переменная для суммы ответов
$result = 0;
if(isset($_SESSION['test'])){
    // Зачитываем ответы из ini-файла в массив
    $answer = parse_ini_file("answers.ini");
    // Проходим по ответам и смотрим, есть ли среди них правильные
    foreach($_SESSION['test'] as $value){
        if(array_key_exists($value, $answer)){
            echo $answers;
            // Суммируем правильные ответы
            $result += (int)$answer[$value];
        }
    }
    // Очищаем данные сесси
    session_destroy();
}
?>
<table width="100%">
	<tr>
		<td align="left">
		<p>Ваш результат: <?= $result?> из 30</p>
		</td>
	</tr>
</table>