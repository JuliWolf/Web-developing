<template>
  <div class="row">
    <app-menu
      :getRequestedData="getRequestedData"
      :getAllStarships="getAllStarships"
      :nextPage="nextPage"
      :prevPage="prevPage"
      :pageNumber="pageNumber"
      :pageCount="pageCount"
      :step="step"
      :checkStep="checkStep"
      :allStarShips="allStarShips"
      :filtredData="filtredData"
      @newValue="[minCap, maxCap, minPrice, maxPrice]=$event"
      :minCap="minCap"
      :maxCap="maxCap"
      :maxPrice="maxPrice"
      :minPrice="minPrice"
      :getMaxMin="getMaxMin"
      >
    </app-menu>

  <div class="col-md-10">


    <img src="../img/arrow.png" alt="" v-if="step === 3 || step === 0 || step === 4" @click="checkStep(2)">
    <div class="container">
        <app-all-starships
          :step="step"
          :checkStep="checkStep"
          :paginatedData="paginatedData"
          :seeStarShip="seeStarShip"
          :dateConvers="dateConvers">
        </app-all-starships>

          <app-exact-starship
            :exactShip="exactShip"
            :months="months"
            v-if="step == 3"
            :dateConvers="dateConvers">
          </app-exact-starship>

        <app-searching-results
          v-if="step == 0"
          :months="months"
          :dateConvers="dateConvers"
          :filtredData="filtredData">
        </app-searching-results>

        <app-watched-ships
          v-if="step === 4"
          :step="step"
          :checkStep="checkStep"
          :dateConvers="dateConvers"
          :watchedShips="watchedShips">

        </app-watched-ships>

    </div>
  </div>

  </div>


</template>

<script>
  import ExactStarship from './ExactShip'
  import SearchResult from './SearchResult'
  import AllStarShips from './AllStarShips'
  import Menu from './Menu'
  import WatchedShips from './WatchedShips.vue'

  export default {
    data(){
      return{
        pageNumber: 0,
        months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        step: 1,
        findedData:[],
        starShipsArray: [],
        exactShip:[],
        allStarShips: [],
        requestedData: [],
        minCap: 100000000,
        maxCap: 0,
        minPrice: 1000000000,
        maxPrice: 0,
        capFlag: 0,
        priceFlag: 0,
        filtredData:[],
        watchedShips:[]
      }
    },
    props: {
      size:{
        type:Number,
        required:false,
        default: 10
      }
    },
    methods: {
      // Сохранение всех массивов в "starShipsArray"
      getAllStarships(url){
        if(url === undefined){
          url = "https://swapi.co/api/starships/";
        }
        var self = this;
        $.ajax({
          type:'GET',
          url: url,
          success: function(resp){
            self.starShipsArray.push(resp);
            if(resp['next'] != null){
              self.getAllStarships(resp['next']);
            }else{
              self.convertArr();
              self.checkStep(2);
              return false;
            }
          }
        });
      },
      // Вспомогательная функция для фильтрации объектов "starship" и сохранения в "allStarShips"
      convertArr(){
        var self = this;
        this.starShipsArray.forEach(function(q){
          q['results'].forEach(function(a){
            if(typeof(a) == "object"){
              self.allStarShips.push(a);
            }
          })
        })
      },
      // Запрос следующей страницы
      nextPage(){
        this.pageNumber++;
      },
      // Запрос предыдущей страницы
      prevPage(){
        this.pageNumber--;
      },
      // Изменения способа отображения даты
      dateConvers(date){
        var data = new Date(date.slice(0, date.indexOf('T')));
        var time = date.slice(date.indexOf('T')+1, date.indexOf('.'));
        return data.getDate()+"."+this.months[data.getMonth()]+"."+data.getFullYear()+ ' at '+ time;
      },
      // Отображение выбранного объекта из массива "allStarShips"
      seeStarShip(url){
        var self = this;
        this.allStarShips.forEach(function(q){
          if(q['url'] === url) {
            self.exactShip = q;
            self.watchedShips(q);
          }
        });
        this.checkStep(3);
      },
      // Изменение этапа для отображения элементов
      checkStep(step){
        this.step = step;
      },
      // нахождение максимальных и минимальных значений ("cargo_capacity", "cost_in_credits")
      getMaxMin(){
        var self = this;
        this.allStarShips.forEach(function(q){
          if(parseInt(q['cargo_capacity']) > self.maxCap){
            self.maxCap = parseInt(q['cargo_capacity']);
          }else if(parseInt(q['cargo_capacity']) < self.minCap){
            self.minCap = parseInt(q['cargo_capacity']);
          }
          if(parseInt(q['cost_in_credits']) > self.maxPrice){
            self.maxPrice = parseInt(q['cost_in_credits']);
          }else if(parseInt(q['cost_in_credits']) < self.minPrice){
            self.minPrice = parseInt(q['cost_in_credits']);
          }
        });
      },
      // Фильтрафия запрошенных полей для поиска нужного объекта
      getRequestedData(name, date, sclass, minCap, maxCap, minPrice, maxPrice){
        this.requestedData = [];
        this.filtredData = [];
        this.checkMaxMinData(minCap, maxCap, 'cargo_capacity', this.minCap, this.maxCap, 'Cap');
        this.checkMaxMinData(minPrice, maxPrice, 'cost_in_credits', this.minPrice, this.maxPrice, 'Price');
        if(name.length > 0){
          this.checkInputData(name, "name");
        }
        if(date.length > 0){
          this.checkInputData(date, "created");
        }
        if(sclass > 0){
          this.checkInputData(sclass, "starship_class");
        }
        this.checkStep(0);
      },
      // Проверка текстовых значений
      checkInputData(data, key){
        var self = this;
        if(this.capFlag === 1 && this.priceFlag === 1){
          this.allStarShips.forEach(function(q){
            if(q[key] === data){
              self.requestedData.push(q);
            }
          })
        }
        this.requestedData.forEach(function(el) {
          if(el[key] != data){
            self.requestedData.splice(self.requestedData.indexOf(el), 1);
          }else{
            self.filtredData.push(el);
          }
        });
      },
      // Проверка необходимости собирать массив, основываясь на числовые значения
      checkMaxMinData(min, max, key, nameMin, nameMax, flag){
        if(min != '' || max != ''){
          if(min >= nameMin || max <= nameMax){
            if(min === nameMin)
              min = nameMin;
            if(max === nameMax)
              max = nameMax;
            this.checkRanging(min, max, key);
          }
        }else{
          if(flag === 'Cap')
            this.capFlag = 1;
          if(flag === 'Price')
            this.priceFlag = 1;
        }
      },
      // Проверка числовых значений
      checkRanging(min, max, key){
        var self = this;
        this.allStarShips.forEach(function(q){
          if(q[key] >= min && q[key] <= max){
            self.requestedData.push(q);
          }
        });
        this.requestedData.map(function(el, index) {
          if(parseInt(el[key]) < min || parseInt(el[key]) > max){
            self.requestedData.splice(index, 1);
          }
        });
      }
    },
    beforeMount(){
      this.getAllStarships();
    },
    beforeUpdate(){
      this.getMaxMin();
    },
    computed: {
      // Вычисление максимального количества страниц
      pageCount(){
        let l = this.allStarShips.length,
          s = this.size;
        return Math.ceil(l/s);
      },
      // Вырезание нужного количества элементов для показа на странице
      paginatedData(){
        const start = this.pageNumber * this.size,
          end = start + this.size;
        return this.allStarShips.slice(start, end);
      }
    },
    components:{
      'app-exact-starship': ExactStarship,
      'app-searching-results': SearchResult,
      'app-menu': Menu,
      'app-all-starships': AllStarShips,
      'app-watched-ships': WatchedShips
    }
  }
</script>

<style lang="scss">
  $bodyColor: #272b30;
  $mainColor: rgb(28, 30, 34);
  $color: rgb(255, 227, 0);
  body{
    background-color: $bodyColor;
    .col-md-10{
      img{
        mergin-left:20px;
        width:50px;
        height:30px;
        transform: scaleX(-1);
        display: inline-block;
        margin: 20px 5%;
      }
    }
    .starship{
      border:1px solid $color;
      background-color: $mainColor;
      color:white;
      padding:10px;
      text-align: center;
      margin-bottom:20px;
      margin-top:10px;

      p#starshipName{
        font-size: 20px;
        color:$color;
      }
    }
    .menu{
      color:white;
    font:{
      size:20px;
    }
    margin-top:20px;
    padding:10px;
      button{
        width:100%;
        border: 1px solid rgba(0,0,0,.6);
        padding: 10px 15px;
        position: relative;
        display: block;
        background-color: #32383e;
        color:inherit;
        cursor:pointer;
        text-decoration:none;
        &:hover{
           color:$color;
         }
      }
      img{
        height:50px;
        width:50px;
      }
    }
  }
</style>
