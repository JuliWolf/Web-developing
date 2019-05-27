<?

error_reporting(E_ALL);

$dt = time();
$page = $_SERVER['REQUEST_URI'];
$ref = $_SERVER['HTTP_REFERER'];
$path = $dt."|".$page."|".$ref."\n";
file_put_contents($_SERVER['DOCUMENT_ROOT'].'/log/path.log', $path, FILE_APPEND);

?>
