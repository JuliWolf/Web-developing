<?
require_once 'admin/data.php';
require_once 'admin/config.php';

parseArr($json);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>SkyNet Application</title>
	<script type="text/javascript" src="/admin/jquery.js"></script>
	<script type="text/javascript" src="/admin/vue.js"></script>

	<link rel="stylesheet" href="/css/bootstrap.css">
	<link rel="stylesheet" href="/css/main.css">
</head>
<body>
	<div class="container-fluid">
		<div class="row" id="app">

            <div id="content" v-if="step == 1">
                <?
                switch($id){
                    default:
                        include'content/main.php';
                }
                ?>
            </div>

            <div id="tarifs" v-if="step == 2" >
                <div class="header" @click="checkStep(1)">
                    <img src="arrow_right.png" alt="">
                    <h1>Тариф "{{tarifs[0].title}}"</h1>
                </div>
                <template v-for="tarif in tarifs">


                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 template" :id="tarif.id">
                        <div class="tarifs">
                            <h1 class="title">{{tarif.payPeriod}} {{monthSpell(tarif.payPeriod)}}</h1>
                            <hr>
                            <div class="container-fluid">
                                <div class="row" style="position:relative;">
                                    <div class="col-md-11" @click="chooseTarif(tarif.id);checkStep(3)">
                                        <h3 class="price"> {{tarif.price/tarif.payPeriod}} ₽/мес</h3>

                                        <div class="paymentCount">
                                            <h4 class="oncePayment">разовый платеж - {{tarif.price}} ₽</h4>
                                            <h4 class="sale">{{countSale(tarif.price, tarif.payPeriod)}}</h4>
                                        </div>

                                    </div>
                                    <div class="col-md-1 img">
                                        <img src="arrow_right.png" alt="">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

                <div id="tarif" v-if="step == 3" >
                    <div class="header" @click="checkStep(2)">
                        <img src="arrow_right.png" alt="">
                        <h1>Выбор тарифа</h1>
                    </div>

                    <template v-for="tarif in exactTarif">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-offset-4 col-lg-4 template">
                            <div class="tarifs">
                                <h1 class="title">Тариф "{{tarif.title}}"</h1>
                                <hr>
                                <h3 class="payPeriod">Период оплаты - {{tarif.payPeriod}} {{monthSpell(tarif.payPeriod)}}</h3>
                                <h3 class="price">{{tarif.price/tarif.payPeriod}} ₽/мес</h3>
                                <div class="payment">
                                    <h4 class="oncePayment">разовый платеж - {{tarif.price}} ₽</h4>
                                    <h4 class="sale">со счета спишется {{tarif.price}} ₽</h4>
                                </div>
                                <div class="startTime">
                                    <h4 class="startTime">вступит в силу - сегодня</h4>
                                    <h4 class="endTime">активно до  - {{converseTime(tarif.date)}}</h4>
                                </div>
                                <hr>
                                <button class="chooseButton">Выбрать</button>
                            </div>
                        </div>
                    </template>
                </div>




            </div>



		</div>
	</div>

    <script>
        var app = new Vue({
            el:"#app",
            data:{
                tarifs:[],
                step: 1,
                basePrice: 0,
                month: '',
                exactTarif: []
            },
            methods:{
                seeTarifs:function(data){
                    self = this;
                    $.ajax({
                        type: "GET",
                        url:'http://skynetapp/admin/chooseTarif.php',
                        data:{
                            'id': data
                        },
                        success: function(resp){
                            self.step = 2;
                            self.tarifs = JSON.parse(resp);
                            self.tarifs.forEach(function(q,w,e){
                                if(q['payPeriod'] == 1){
                                    self.basePrice = q['price'];
                                }
                            })
                        }
                    });
                },
                countSale: function(price, period){
                    if(price != this.basePrice){
                        return "скидка - "+ (parseInt(period)*this.basePrice - price) + " ₽";
                    }else{
                        return "";
                    }
                },
                checkStep:function(step){
                    this.step = step;
                },
                monthSpell: function(period){
                    if(period == 1){
                        return this.month = 'месяц';
                    }else if(period > 1 && period <=4){
                        return this.month = 'месяца';
                    }else{
                        return this.month = 'месяцев';
                    }
                },
                chooseTarif: function(id){
                    var self = this;
                    this.tarifs.forEach(function(q,w,e){
                        if(q['id'] == id){
                            self.exactTarif.splice(0,);
                            self.exactTarif.push(q);
                        }
                    })
                },
                converseTime: function(timestamp){
                    months = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
                   var time = timestamp.slice(0,timestamp.indexOf('+'));
                   time = new Date(time*1000);

                   return time.getDate()+"."+months[time.getMonth()]+"."+time.getFullYear();
                }
            }
        });

    </script>

</body>
</html>