<?
/**
 * @param array $array
 * @return array
 */
function parseArr(array $array){
    global $allTarifs;
    if(!$array){
        return false;
    }
    foreach($array as $arr){
        $allTarifs = $arr;
    }
}

/**
 * @param array $array, string $paramName, string $data, string $arrayName
 * @return array
 */
function getArr(array $arr, $paramName, $data, $arrayName){
    if(!is_array($arr))
        return false;
    if(isset($arrayName))
        unset($arrayName);

    global $arrayName;
    $arrayName = [];
    foreach($arr[$paramName] as $val){
        $arrayName[] = $val[$data];
    }
    return $arrayName;
}

/**
 * @param array $array, string $flag
 * @return array $innerTarifs
 */
function seeArr(array $array, $flag){
    global $innerTarifs;
    unset($innerTarifs);
    global $innerTarifs;
    $innerTarifs = [];
    if(!$array)
        return false;
    foreach($array as $data){
        if($data['title'] == $flag){
            foreach($data['tarifs'] as $val){
                $tarifsArray = [
                    'title' => $flag,
                    'id' => $val['ID'],
                    'name' => $val['title'],
                    'payPeriod' => $val['pay_period'],
                    'price' => $val['price'],
                    'date' => $val['new_payday']
                ];
                $innerTarifs[] = $tarifsArray;
            }
        }
    }
}

