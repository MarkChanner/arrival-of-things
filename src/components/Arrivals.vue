<template>
  <div>
    <article v-for="platformArrivals in stationArrivals" :key="platformArrivals.id">
      <h2>{{ platformArrivals.platformNumber }}</h2>
      
      <article v-for="train in platformArrivals.trains" :key="train.id">
        <p>{{ train.destinationName }} - {{ train.timeToStation }}</p>
      </article>
      
    </article>
  </div>
</template>

<script>
export default {
  props: {
    stationArrivals: Array
  }
}
</script>

<style>

</style>
