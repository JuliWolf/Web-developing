<?
function drawMenu($menu, $vertical=true){
    if (!is_array($menu))
      return false;
    $display_prop = $vertical ? 'block': 'inline-block';
    echo "<ul>";
    foreach($menu as $m ){
      echo "<li style='display:$display_prop;margin-right:15px;'><a href='{$m['link']}'> {$m['text']} </a></li>";
     }
    echo "</ul>";
    return true;
}

function table($cols=5, $rows=5, $color="grey"){
  echo "<table border='1' width='200'>\n";
  for($tr = 1; $tr <= $cols; $tr++){
    echo "\t<tr>\n";
    for($td = 1; $td <= $rows; $td++){
      if($tr == 1 or $td == 1){
        echo "\t<th style='background:$color;'>". $tr*$td."</th\n>";
      }else
        echo "\t<td>". $tr*$td."</td>\n";
    }
    echo "</tr>\n";
  }
  echo "</table>\n";
}

function myError ($no, $msg, $file, $line){
  $dt = date("d-m-Y H:i:s");
  $str = "[$dt] - $msg in $file:$line\n";
  switch ($no) {  
    case E_USER_ERROR:  
    case E_USER_WARNING:
    case E_USER_NOTICE:
      echo $msg;
    // default: echo $msg;
   }
    error_log($str, 3, "error.log");
}





?>