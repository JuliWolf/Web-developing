<template>
  <div id="app">
    <div class="container-fluid">

        <app-main-content
          @newStarShipArray="starShipsArray=$event"
          :starShipsArray="starShipsArray"
          :exactShip="exactShip"
          @newCurrentShip="exactShip=$event"
          :step="step"
          @updateStep="step=$event"
          :months="months">
        </app-main-content>
    </div>
  </div>


</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import MainContent from './components/MainContent.vue'
  import ExactShip from './components/ExactShip.vue'


export default {
  components: {
    'app-main-content': MainContent,
    'app-exact-ship': ExactShip,

  },
  data: function () {
    return {
      starShipsArray: [],
      months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      step: 1,
      exactShip:[]
    }
  }
}
</script>

<style lang="scss">

</style>
