<template>
  <div class="row">
    <div class="col-md-6 starships" v-for="starship in watchedShips">
      <div class="starship">
        <p id="starshipName"><b>Название: </b>{{starship.name}}</p>
        <p id="starshipCreated"><b>Дата создания: </b>{{dateConvers(starship.created)}}</p>
        <p id="starshipClassName"><b>Класс: </b>{{starship.starship_class}}</p>
        <p id="starshipCapacity" ><b>Вместимость: </b>{{starship.cargo_capacity}} kg</p>
        <p id="starshipPrice" ><b>Стоимость: </b>{{starship.cost_in_credits}} credits</p>
      </div>
    </div>
  </div>
</template>


<script>

  export default{
    props:{
      step: Number,
      checkStep: Function,
      dateConvers: Function,
      watchedShips: [Array, Object]
    }
  }
</script>
<style lang="scss">

</style>
