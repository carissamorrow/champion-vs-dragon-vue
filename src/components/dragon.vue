<template>
  <div class="dragon">

  </div>
  </div>
</template>

<script>
  import allDragons from './@components/allDragons.vue'

  export default {
    name: 'dragon',
    data() {
      return {
        dragon: {
          name: '',
          imgUrl: ''
        }
      }
    },
    computed: {
      selectDragon() {
        return this.$store.state.dragon
      }
    },
    methods: {
      showDragon() {

      }
    }
  }

</script>

<style>


</style>