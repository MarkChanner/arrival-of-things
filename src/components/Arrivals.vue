<template>
  <div>
    <article class="platform" v-for="platformArrivals in stationArrivals" :key="platformArrivals.id">
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

<style scoped>
.platform {
  background-color: #487eb0;
  border-radius: 10px;
  line-height: 1.5;
  margin-bottom: 80px;
  padding-bottom: 10px;
  padding-top: 10px;
}

h2 {
  color: #f5f6fa;
  font-size: 2em;
}
</style>
