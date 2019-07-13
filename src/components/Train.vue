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

<style scoped>
p {
  background-color: #f5f6fa;
  border-radius: 5px;
  font-size: 18px;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>