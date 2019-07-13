<template>
  <p>{{ train.destinationName }} - {{ train.timeToStation }}</p>
</template>

<script>
export default {
  props: {
    train: Object
  }
}
</script>

<style>
</style>