<template>
  <div>
    <h1>Trade or Vue your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End day' to begin a New Day!</h6>
    <hr>
    <p>Your Frunds: {{ funds | currency}}</p>
  </div>
</template>

<script>
  export default{
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>
