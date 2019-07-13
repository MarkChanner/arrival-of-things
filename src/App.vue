<template>
  <div id="app">
    <div class="container">

      <header>
        <h1> {{ stationName }} </h1>
      </header>

      <main>
        <article v-for="platformArrivals in stationArrivals" :key="platformArrivals.id">
          <h2>{{ platformArrivals.platformNumber }}</h2>
          <p>Train info here</p>
        </article>
      </main>

    </div>
  </div>
</template>

<script>
import {HTTP} from '../http-common';

export default {
  data () {
    return {
      stationName: '',
      stationArrivals: []
    }
  },
  created() {
    HTTP.get()
    .then(response => {
      this.stationName = response.data[0].stationName;

      const platforms = response.data.map(train => train.platformName);
      const uniquePlatforms = [...new Set(platforms)];
      const sortedPlatforms = uniquePlatforms.sort((p1, p2) => p1[p1.length -1] - p2[p2.length -1]);

      sortedPlatforms.forEach((platform, index) => {
        const platformArrivals = { id: index, platformNumber: platform, trains: [] };

        response.data.forEach(train => {
          if (train.platformName === platform) {
            platformArrivals.trains.push(train);
          }
        });

        platformArrivals.trains = platformArrivals.trains.sort((train1, train2) => train1.timeToStation - train2.timeToStation);
        this.stationArrivals.push(platformArrivals);
      });
      console.log(this.stationArrivals);
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
