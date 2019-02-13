<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>

  </div>
</template>

<script>
  import{ mapGetters} from 'vuex'
  import * as types from '../store/types';
  export default{
    // Чтобы можно было писать свои computed methods необходимо добавить '...' перед mapGetters
    computed: {
        ...mapGetters({
          doubleCounter: types.DOUBLE_COUNTER,
          stringCounter: types.CLICK_COUNTER
        })

      }
  }
</script>

<style>

</style>
