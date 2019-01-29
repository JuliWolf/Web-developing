<template>
  <div class="col-md-12 exactStarship">
    <div class="starship">
      <p v-for="(ship, key) in exactShip">
        <span v-if="checkUnknown(ship, key)">
          <b>{{key}}:</b> {{ship}}
          </span>
      </p>
  </div>
  </div>
</template>

<script>
  export default{
    props:{
      exactShip: {
        type: [Object, Array]
      },
      months: Array,
      step: Number,
      dateConvers: Function

    },
    methods:{
      checkUnknown(data, key){
        if(data != 'unknown' && key !="pilots" && key !='films' && key!= 'url' && data!='n/a'){
          return data, key;
        }else{
          return false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $color: rgb(255, 227, 0);
  .starship{
    p:hover{
      color:$color;
    }
  }
</style>
