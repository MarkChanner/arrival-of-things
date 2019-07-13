<template>
  <div id="app">
    <div class="container">
      <header>
        <h1> {{ stationName }} </h1>
      </header>
    </div>
  </div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
  data () {
    return {
      stationName: 'Portlandia'
    }
  },
  created() {
    HTTP.get()
    .then(response => {
      this.stationName = response.data[0].stationName;
    })
    .catch(error => {
      console.log(error);    
    });
  }
}
</script>

<style>
</style>
