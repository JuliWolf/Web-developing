<?
require 'data.php';
require 'config.php';

 parseArr($json);
if(!$_GET['id'])
    return false;
$id = $_GET['id'];
seeArr($allTarifs, $id);
echo json_encode($innerTarifs, JSON_UNESCAPED_UNICODE);
//var_dump($innerTarifs);





