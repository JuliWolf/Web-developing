<template>
    <div>
      <div class="container">
        <div class="row" v-if="dataPerPage.length">
          <div class="col-6" v-for="item in dataPerPage" :key="item.id">
            <app-admins-list :item="item"></app-admins-list>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <nav aria-label="Page navigation example" v-if="dataPerPage.length">
              <ul class="pagination">
                <li class="page-item">
                  <button class="btn btn-primary" aria-label="Previous" @click="getPrevPageData" :disabled="pageNumber === 0">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                <li class="page-item">
                  <button class="btn btn-primary" aria-label="Next" @click="getNextPageData" :disabled="pageNumber >= pageCount -1">
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <app-change-user-modal v-if="getChangeModalFlag" :item="userToChange"></app-change-user-modal>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import adminsList from './AdminCard.vue'
import changeUserModal from './changeUserModal.vue'

export default {
  methods: {
    ...mapActions([
      'getData',
      'getNextPageData',
      'getPrevPageData'
    ])
  },
  computed: {
    ...mapGetters([
      'dataPerPage',
      'pageNumber',
      'pageCount',
      'getChangeModalFlag',
      'userToChange'
    ])
  },
  components: {
    appAdminsList: adminsList,
    appChangeUserModal: changeUserModal
  },
  beforeMount () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">

</style>
