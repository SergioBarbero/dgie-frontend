<template>
  <div id="app">
    <date-range-picker
        ref="picker"
        :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy HH:mm:ss' }"
        v-model="dateRange"
    >
      <template v-slot:input="picker" style="min-width: 350px;">
        {{ picker.startDate }} - {{ picker.endDate }}
      </template>
    </date-range-picker>
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
    <div>
      <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
        <b-form-radio v-model="period" :aria-describedby="ariaDescribedby" name="period-radio" value="daily">Daily</b-form-radio>
        <b-form-radio v-model="period" :aria-describedby="ariaDescribedby" name="period-radio" value="weekly">Weekly</b-form-radio>
        <b-form-radio v-model="period" :aria-describedby="ariaDescribedby" name="period-radio" value="monthly">Monthly</b-form-radio>
      </b-form-group>
    </div>
    <button @click="loadData">Load data</button>
    <DashBoard :marketData="marketData"/>
  </div>
</template>

<script>
import DashBoard from './components/Dashboard.vue'
import { getMarketSumData } from "@/service/market";
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

export default {
  name: 'App',
  data() {
    return {
      dateRange : {
        startDate: null,
        endDate: null
      },
      period: '',
      selectedColumns: [],
      totalColumns: ["lots_total", "net_total", "cost_total", "rebate_total"],
      selectedProducts: [],
      totalProducts: ["CMX HG COPPER", "CMX SILVER" , "CMX GOLD", "ICUS COTTON", "ICE US COFFEE", "CBOT MINI DOW", "EURX EURO-BOBL", "CBT CORN", "ICEUS FCOJ-A"],
      marketData: {}
    }
  },
  methods: {
    async loadData() {
      this.marketData = (await getMarketSumData(this.selectedColumns, this.period, this.selectedProducts, this.dateRange)).data;
    }
  },
  components: {
    DashBoard: DashBoard,
    DateRangePicker: DateRangePicker
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
