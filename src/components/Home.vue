<template>
  <div class="home">
    <table>
      <tr>
        <td>Product</td>
        <td v-for="column in columns" :key="column">{{ column }}</td>
      </tr>
      <tr v-for="product in Object.keys(marketData)" :key="product">
        <th>{{ product }}</th>
        <th v-for="column in columns" :key="column">
          {{ marketData[product][0]["SUM(" + column + ")"] }}
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import { getMarketSumData } from "@/service/market";

export default {
  name: 'HelloWorld',
  data() {
    return {
      columns: ["lots_total", "net_total", "cost_total", "rebate_total"],
      products: ["CMX HG COPPER", "CMX SILVER" , "CMX GOLD", "ICUS COTTON", "ICE US COFFEE", "CBOT MINI DOW", "EURX EURO-BOBL", "CBT CORN", "ICEUS FCOJ-A"],
      date: { "from": 20200902, "to": 20200930 },
      marketData: {},
    }
  },
  props: {
    msg: String
  },
  async mounted() {
    this.marketData = (await getMarketSumData(this.columns, this.period, this.products, this.date)).data;
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
