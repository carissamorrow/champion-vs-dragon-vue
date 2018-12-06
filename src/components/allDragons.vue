<template>
  <div class="allDragons">

  </div>
</template>

<script>
  export default {
    name: 'allDragons',
    data() {
      return {
        allDragons: {
          name: '',
          imgUrl: ''
        }
      }
    },
    computed: {},
    methods: {
      getDragons() {
        this.$store.dispatch('getDragons', this.allDragons)
      }
    }
  }

</script>

<style>


</style>