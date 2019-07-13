<template>
  <div>
    <article v-for="platformArrivals in stationArrivals" :key="platformArrivals.id">
      <h2>{{ platformArrivals.platformNumber }}</h2>
      
      <article v-for="train in platformArrivals.trains" :key="train.id">
        <train :train="train"></train>
      </article>

    </article>
  </div>
</template>

<script>
import Train from './Train.vue';

export default {
  props: {
    stationArrivals: Array
  },
  components: {
    train: Train
  }
}
</script>

<style>

</style>
