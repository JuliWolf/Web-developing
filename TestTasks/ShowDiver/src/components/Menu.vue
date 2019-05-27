<template>
  <div class="col-md-2 menu">
    <h3 @click="checkSearch" v-if="step === 2 || step === 0">Поиск</h3>

    <div class="form-group" v-if="search === true">
      <input type="text" placeholder="Название" v-model.trim="sName" >
      <input type="text" placeholder="Дата создания" v-model.trim="sDate" >
      <input type="text" placeholder="Класс" v-model.trim="sClass" >
      <div class="capacity">
        <p>Вместимость</p>
        <input type="number" name="capacity" v-model="rMinCap" :placeholder="[[ minCap ]]" >
        <span>min</span>
        <input type="number" name="capacity" v-model="rMaxCap" :placeholder="[[ maxCap ]]" >
        <span>max</span>
      </div>
      <div class="price">
        <p>Цена</p>
        <input type="number" name="price" v-model="rMinPrice" :placeholder="[[ minPrice ]]" >
        <span>min</span>
        <input type="number" name="price" v-model="rMaxPrice" :placeholder="[[ maxPrice ]]">
        <span>max</span>
      </div>
      <button type="submit" @click="getRequestedData(sName, sDate, sClass, rMinCap, rMaxCap, rMinPrice, rMaxPrice);">Search</button>
    </div>

    <div v-if="step === 2 || step === 0">
      <button @click="nextPage" :disabled="pageNumber >= pageCount -1">Next page </button>
      <button @click="prevPage" :disabled="pageNumber === 0">Previous page </button>
      <button @click="checkStep(4)" >See Watched History </button>

    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        sName:'',
        sDate:'',
        sClass:'',
        rMinCap: '',
        rMaxCap: '',
        rMinPrice:'',
        rMaxPrice:'',

        search:false
      }
    },
    props:{
      getRequestedData: Function,
      getAllStarships: Function,
      nextPage: Function,
      prevPage: Function,
      pageNumber: Number,
      pageCount: Number,
      step: Number,
      checkStep: Function,
      filtredData: [Array, Object],
      allStarShips: [Array, Object],
      minCap: Number,
      maxCap: Number,
      maxPrice: Number,
      minPrice: Number,
      getMaxMin: Function,
    },
    methods:{
      // Отображение полей поиска
      checkSearch(){
        if(this.search === false)
          this.search = true;
        else
          this.search = false;
      },
    },
  }
</script>

<style lang="scss">
  .form-group{
    margin:10px 0px;
    padding:10px 0px;
    .capacity{
      margin:10px 0px;
    }
    .button{
      margin-top:20px;
    }
  }

</style>
