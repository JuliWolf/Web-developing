<template>
  <div class="row">
    <div class="col-md-6" v-for="data in filtredData">
      <div class="starship">
        <p id="starshipName"><b>Название: </b>{{data.name}}</p>
        <p id="starshipCreated"><b>Дата создания: </b>{{dateConvers(data.created)}}</p>
        <p id="starshipClassName"><b>Класс: </b>{{data.starship_class}}</p>
        <p id="starshipCapacity"><b>Вместимость: </b>{{data.cargo_capacity}} kg</p>
        <p id="starshipPrice"><b>Стоимость: </b>{{data.cost_in_credits}} credits</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    props:{
      months: Array,
      dateConvers: Function,
      filtredData: [Array, Object]
    },
  }
</script>

<style lang="scss">
.empty{
  h3{
    color:white;
  }
}
</style>
