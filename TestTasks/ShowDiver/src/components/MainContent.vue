<template>
  <div class="row">
  <div class="col-md-2">

    <div class="menu">
      <a @click="getAllStarships(); checkStep(1)">See all starships</a>
      <br>
      <div v-if="step == 1">
        <a @click="turnPage('next')">Next page</a>
        <br>
        <a @click="turnPage('previous')">Previous page</a>
      </div>
      <div v-if="step == 2">
        <a @click="turnPage('url', 1)">Next page</a>
        <br>
        <a @click="turnPage('url', 0)">Previous page</a>
      </div>
    </div>

  </div>

  <div class="col-md-10">
    <div class="container">
      <div class="row">
        <div class="col-md-6 starships"
             v-for="starship in starShipsArray['results']"
              v-if="step == 1">
          <div class="starship" @click="seeStarShip(starship.url)">
            <p id="starshipName"><b>Название: </b>{{starship.name}}</p>
            <p id="starshipCreated"><b>Дата создания: </b>{{dateConvers(starship.created)}}</p>
            <p id="starshipClassName"><b>Класс: </b>{{starship.starship_class}}</p>
            <p id="starshipCapacity"><b>Вместимость: </b>{{starship.cargo_capacity}} kg</p>
            <p id="starshipPrice"><b>Стоимость: </b>{{starship.cost_in_credits}} credits</p>
          </div>
        </div>

          <app-exact-starship
            :exactShip="exactShip"
            :step="step"
            :months="months"
            v-if="step == 2"
            :dateConvers="dateConvers"
          ></app-exact-starship>

      </div>
    </div>
  </div>

  </div>


</template>

<script>
  import ExactStarship from './ExactShip'

  export default {
    props: {
      starShipsArray: {
        type: [Object, Array]
      },
      months: Array,
      step: Number,
      exactShip: [Array, Object]
    },
    methods: {
      getAllStarships(url, arr) {
        console.log(arr);
        var self = this;
        if (url === undefined) {
          url = 'https://swapi.co/api/starships/';
        }
        if(arr === undefined) {
          arr = self.starShipsArray;
          var emit = 'newStarShipArray';
        }else{
          var emit = 'newCurrentShip';
        }
        arr = [];
        $.ajax({
          type: 'GET',
          url: url,
          success: function (resp) {
            arr = resp;
            self.$emit(emit, arr);
          }
        });
      },
      turnPage(num, act) {
        if(act === undefined){
          this.getAllStarships(this.starShipsArray[num]);
        }else{
          var link = this.exactShip[num];
          var number = parseInt(link.replace(/[^0-9]/gi, '').trim());
          if(act === 0){
            number--;
          }else if(act === 1){
            number++;
          }
          var needLink = link.replace(/\d\d/g,number);
          console.log(needLink);
          this.getAllStarships(needLink, this.exactShip);
        }

      },
      dateConvers(date){
        var data = new Date(date.slice(0, date.indexOf('T')));
        var time = date.slice(date.indexOf('T')+1, date.indexOf('.'));
        return data.getDate()+"."+this.months[data.getMonth()]+"."+data.getFullYear()+ ' at '+ time;
      },
      seeStarShip(url){
        var self = this;
        this.starShipsArray['results'].forEach(function(q,w,e){
          if(q['url'] === url){
            self.exactShip = q;
          }
        });
        this.$emit('newCurrentShip',  this.exactShip);
        this.checkStep(2);
      },
      checkStep(step){
        this.step = step;
        this.$emit('updateStep', this.step);
      }
    },
    components:{
      'app-exact-starship': ExactStarship
    }
  }
</script>

<style lang="scss">
  $bodyColor: #272b30;
  $mainColor: rgb(28, 30, 34);
  $color: rgb(255, 227, 0);
  body{
    background-color: $bodyColor;
  .starship{
    border:1px solid $color;
    background-color: $mainColor;
    color:white;
    margin-top:20px;
    padding:10px;
    text-align: center;
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
  a{
    color:inherit;
    cursor:pointer;
    text-decoration:none;
  &:hover{
     color:$color;
   }
  }
  }

  }
</style>
