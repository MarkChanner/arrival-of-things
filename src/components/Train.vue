<template>
  <p>{{ getDestination(train.destinationName) }} - {{ getTimeToStation(train.timeToStation) }}</p>
</template>

<script>
export default {
  props: {
    train: Object
  },
  methods: {
    getDestination(destination) {
      return destination ? destination.split('Underground Station')[0] : 'Check front of train';
    },
    getTimeToStation(secondsToArrival) {
      const mins = Math.floor(secondsToArrival / 60);
      return mins > 0 ? `${mins} min` : 'due';
    }
  }
}
</script>

<style>
</style>