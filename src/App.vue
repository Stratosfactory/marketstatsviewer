<template>
<market-data></market-data>
</template>

<script>

import marketData from "./components/marketData.vue"
export default {
  name: "App",
  components:{
    marketData
  },
  computed: {
    
  },
   created(){
     this.$store.dispatch("getMarketData")
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  
  
}
body{
  background: #29313a;
}
</style>
