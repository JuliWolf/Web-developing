<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
  import User from './components/User.vue';
  import UserDetail from './components/UserDetail.vue'
  import UserEdit from './components/UserEdit.vue'

  export default {
    components:{
      appUser: User,
      'app-user-detail': UserDetail,
      'app-user-edit': UserEdit
    },
  }
</script>

<style>
  div.component{
    border: 1px solid black;
    padding:30px;
  }
</style>
