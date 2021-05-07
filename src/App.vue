<template>
  <div id="app">
    <div>
      <b-form-group label="Columns:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="selectedColumns"
            :aria-describedby="ariaDescribedby"
            name="selected-columns"
        >
          <b-form-checkbox v-for="column in totalColumns" :key="column" :value="column"> {{ column }}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    <div>
      <b-form-group label="Columns:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
            id="selected-products"
            v-model="selectedProducts"
            :aria-describedby="ariaDescribedby"
            name="selected-products"
        >
          <b-form-checkbox v-for="product in totalProducts" :key="product" :value="product"> {{ product }}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    <button @click="loadData">Load data</button>
    <DashBoard :marketData="marketData" :date="date"/>
  </div>
</template>

<script>
import DashBoard from './components/Dashboard.vue'
import { getMarketSumData } from "@/service/market";

export default {
  name: 'App',
  data() {
    return {
      selectedColumns: [],
      totalColumns: ["lots_total", "net_total", "cost_total", "rebate_total"],
      selectedProducts: [],
      totalProducts: ["CMX HG COPPER", "CMX SILVER" , "CMX GOLD", "ICUS COTTON", "ICE US COFFEE", "CBOT MINI DOW", "EURX EURO-BOBL", "CBT CORN", "ICEUS FCOJ-A"],
      date: { "from": 20200902, "to": 20200930 },
      marketData: {}
    }
  },
  methods: {
    async loadData() {
      this.marketData = (await getMarketSumData(this.selectedColumns, this.period, this.selectedProducts, this.date)).data;
    }
  },
  components: {
    DashBoard: DashBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
