<?
foreach($allTarifs as $tarif){
    if($tarif['speed'] < 100){
        $color = '#70603e';
    }elseif((100 <= $tarif['speed']) && ($tarif['speed'] < 200)){
        $color = '#0075d9';
    }else{
        $color = '#e74807';
    }
    $price = getArr($tarif, 'tarifs', 'price', $price);
    $payPeriod = getArr($tarif, 'tarifs', 'pay_period', $payPeriod);
    ?>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 content">
        <div class="tarifs">
            <h1 class='title'><?=$tarif['title'];?></h1>
            <hr>
            <div class="container-fluid">
                <div class="row" style='position:relative;'>
                    <div class="col-md-11" @click="seeTarifs('<?=$tarif['title']?>')">
                        <h3 class='speed' style='background-color:<?=$color?>'><?=$tarif['speed']?> Мбит/с</h3>
                        <h3 class="price"><? echo (max($price)/max($payPeriod)).' - '. min($price)?> ₽/мес</h3>

                        <h4 class='options'>
                            <?
                            if(!$tarif['free_options']){
                                echo '';
                            }else{
                                foreach($tarif['free_options'] as $val){
                                    echo $val.'<br>';
                                }
                            }
                            ?>
                        </h4>

                    </div>
                    <div class="col-md-1 img" align='center'>
                        <img src="arrow_right.png" alt="" data-id="<?=$tarif['title'];?>">
                    </div>
                </div>
            </div>
            <hr>
            <a href="<?=$tarif['link']?>">узнать подробнее на сайте www.sknt.ru</a>
        </div>
    </div>
    <?
}
?>

