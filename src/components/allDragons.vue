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
      getAllDragons() {
        this.$store.dispatch('getAllDragons')
      }
    }
  }

</script>

<style>


</style>