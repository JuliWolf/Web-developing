<template>
  <div class="modal changeUserDialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Change User</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" v-model="username">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="email">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="checkNewInfo">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'item'
  ],
  data () {
    return {
      username: this._props.item.name,
      email: this._props.item.email
    }
  },
  methods: {
    ...mapActions([
      'changeModalFlag',
      'updateUserInfo'
    ]),
    initHandlers: () => {
      window.jQuery('.changeUserDialog').on('hidden.bs.modal', function () {
        this.username = ''
        this.email = ''
        this.changeModalFlag()
      })
    },
    checkNewInfo: function () {
      if (this.username !== this._props.item.name ||
        this.email !== this._props.item.email) {
        this.updateUserInfo({ id: this._props.item.id, data: { name: this.username, email: this.email } })
        window.jQuery('.changeUserDialog').modal('hide')
      }
    }
  },
  beforeMount () {
    this.initHandlers()
  }
}
</script>

<style scoped lang="scss">
.modal{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
  -webkit-transition: all 200ms ease-in;
  -moz-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  pointer-events: none;
  margin: 0;
  padding: 0;
}
</style>
