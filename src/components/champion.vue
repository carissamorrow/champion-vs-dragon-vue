<template>
  <div class="champion">

  </div>
</template>

<script>
  export default {
    name: 'champion',
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      selectChampion() {
        return this.$store.state.dragon
      }
    }
  }

</script>

<style>


</style>