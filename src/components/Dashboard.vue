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
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  props: {
    columns: Array,
    marketData: Object,
  },
  async mounted() {},
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
