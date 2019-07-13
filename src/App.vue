<template>
  <div id="app">
  </div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
  data () {
    return {

    }
  },
  created() {
    HTTP.get()
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);    
    });
  }
}
</script>

<style>
</style>
