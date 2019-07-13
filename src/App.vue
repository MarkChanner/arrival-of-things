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
      
      const platforms = response.data.map(train => train.platformName);
      const uniquePlatforms = [...new Set(platforms)];
      const sortedPlatforms = uniquePlatforms.sort((p1, p2) => p1[p1.length -1] - p2[p2.length -1]);
      console.log(sortedPlatforms);
    })
    .catch(error => {
      console.log(error);    
    });
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
}
</style>
