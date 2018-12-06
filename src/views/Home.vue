<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Welcome to Champion Vs Dragon Vue!</h1>
      </div>
    </div>
    <div class="row justify-content-around mt-5 pb-5">
      <div class="col-5">
        <h4>Choose Your Champion</h4>
      </div>
      <div class="col-5">
        <h4>Choose Your Enemy</h4>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import allChampions from '@/components/allChampions.vue'
  import allDragons from '@/components/allDragons.vue'



  export default {
    name: 'home',
    data() {
      return {

      }
    },
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    components: {
      allChampions,
      allDragons
    }
  }
</script>
<style>
  .home {
    font-size: 50px;
    font-stretch: expanded;
    color: aquamarine;
    background-color: black;
    text-align: center;
    font-weight: 500;
    text-shadow: 2px 2px #ff0000;
  }
</style>