<template>
  <div class="conrainer">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | to-uppercase | toLowercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits"> {{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'
  import {fruitMixin} from './fruitMixin.js'

export default {
  mixins: [fruitMixin],
  data(){
    return {
      text: 'Hello World!',
    }
  },
  filters: {
    'to-uppercase'(value){
      return value.toUpperCase();
    },
    toLowercase(value){
      return value.toLowerCase();
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>

</style>
