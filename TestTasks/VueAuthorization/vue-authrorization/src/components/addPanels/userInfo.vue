<template>
  <div class="container-fluid">
    <div class="row justify-content-end">
      <div class="col-6">
        <div class="alert alert-light" role="alert">
          You logged in as <strong>{{ authUserInfo.name }}</strong>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'authUserInfo'
    ])
  }
}
</script>
<style>
  .alert-light{
    float: right;
  }
</style>
