<template>
  <div id="app">
      <app-header></app-header>
      <app-user-info v-if="authStatus"></app-user-info>
      <div class="container-fluid">
        <router-view></router-view>
      </div>
      <div class="footer">
        <app-footer></app-footer>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from './components/addPanels/header.vue'
import Footer from './components/addPanels/footer.vue'
import UserInfo from './components/addPanels/userInfo.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-user-info': UserInfo
  },
  computed: {
    ...mapGetters([
      'authStatus'
    ])
  }
}
</script>

<style lang="scss">
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    margin: 0;
    margin-bottom: 60px; /* Margin bottom by footer height */
    padding: 0;
  }
</style>
