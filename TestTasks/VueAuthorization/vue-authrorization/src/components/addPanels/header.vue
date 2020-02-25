<template>
  <div class="container-fluid">
    <div class="row navbar">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="/">Administrators</a>
        </li>
      </ul>
      <div class="signButtons">
        <a class="btn btn-default" v-if="!authStatus" href="/logIn">
          Log In
        </a>
        <a class="btn btn-default" v-else @click="logOut">
          Log Out
        </a>
        <a class="btn btn-default" v-if="!authStatus" href="/signUp">
          SignUp
        </a>
      </div>

    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'authStatus'
    ])
  },
  methods: {
    ...mapActions([
      'logOut'
    ])
  }
}
</script>
<style scoped lang="scss">
  .navbar{
    width: 100%;
  }
  .nav-pills{
    margin: 5px;
  }
  .signButtons{
    float: right;
  }
</style>
