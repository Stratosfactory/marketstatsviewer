<template>
  <div>
    <h1>Steam Market Stats</h1>
    <div class="itemGrid">
      <item-card
        v-for="item in marketData"
        :key="item.id"
        :itemData="item"
      ></item-card>
    </div>
  </div>
</template>

<script>
import itemCard from "./itemCard.vue";
export default {
  components: { itemCard },
  computed: {
    marketData() {
      return this.$store.getters.fetchMarketData;
    },
  },
};
</script>

<style>
.itemGrid {
  display: flex;
  flex-wrap: wrap;
}

h1{
  font-family: monospace;
  font-size: 3rem;
}
</style>