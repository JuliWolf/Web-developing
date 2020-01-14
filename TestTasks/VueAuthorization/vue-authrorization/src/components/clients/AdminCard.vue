<template>
  <div class="card" style="width: 18rem;">
    <img :src="item.avatar" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{item.email}}</h6>
      <a href="#" class="card-link" @click="chooseUser(item.id)">Change</a>
      <a href="#" class="card-link" @click="deleteUser(item.id)">Delete</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'deleteUser',
      'chooseUser'
    ])
  }
}
</script>

<style scoped lang="scss">
  .card{
    margin-bottom: 10px;
  }
</style>
