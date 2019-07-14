# Arrival of Things

This application utilizes [TFL's unified API](https://blog.tfl.gov.uk/2015/10/01/tfl-unified-api-part-1-introduction/) to display trains due to arrive at Great Portland Street station. If arrivals to a different station are required, simply enter the station's _NAPTaN code_ into the baseURL value contained in the _http-common.js_ file. The codes for King's Cross St Pancras and Oxford Circus stations are already provided in the file if you would like to try this out.  

I have tried to make the code flexible, extensible, and readable, the majority of which can be found in the _App.vue_ file, and the _Arrivals.vue_ and _Train.vue_ components.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
  
## Update

I have also attempted a React version of this project which can be found [here](https://github.com/MarkChanner/arrival-of-things-react-version). I am less familiar with React, but it was a great learning exercise.
