<template>
  <div id="app">
    <div class="container-fluid">

        <app-main-content>
        </app-main-content>
    </div>
  </div>


</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import MainContent from './components/MainContent.vue'


export default {
  components: {
    'app-main-content': MainContent,
  }
}
</script>

<style lang="scss">

</style>
