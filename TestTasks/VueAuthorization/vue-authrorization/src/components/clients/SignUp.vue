<template>
  <div class="conrainer">
    <div class="row justify-content-md-center">
      <form class="col-6">
        <div class="alert alert-danger" role="alert" v-if="errorMessage.length > 0">
          {{errorMessage}}
        </div>
        <div class="form-group">
          <label for="username">User Name</label>
          <input type="text" class="form-control" id="username" v-model="username" placeholder="Enter your Name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter your Email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter your Password">
        </div>
        <button type="submit" class="btn btn-primary" @click="submitForm">Submit</button>
      </form>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'errorMessage'
    ])
  },
  methods: {
    ...mapActions([
      'createNewUser'
    ]),
    submitForm: function (e) {
      e.preventDefault()
      if (this.username !== '' && this.email !== '' && this.password !== '') {
        this.createNewUser({ name: this.username, email: this.email, Password: this.password })
      }
    }
  }
}
</script>
<style>

</style>
