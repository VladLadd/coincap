<template>
  <section>
    <v-row no-gutters class="w-100">
      <h1>List of Markets</h1>
      <div class="w-100 pt-5">
        <table
                class="table table-bordered table-hover table-striped col-12"
                id="dataTable"
                width="100%"
                cellspacing="0"
        >
          <thead>
          <tr class="rounded">
            <th v-for="item in titles" :key="item.param" >
              <div class="align-items-center d-flex justify-content-between">
                {{ item.name }}
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in listMarkets" :key="item.length">
            <td>{{ item.baseSymbol }}</td>
            <td>{{ item.baseId }}</td>
            <td>{{ item.quoteSymbol }}</td>
            <td>{{ item.priceQuote }}</td>
            <td>{{ item.priceUsd }}</td>
            <td>{{ item.volumeUsd24Hr }}</td>
            <td>{{ item.percentExchangeVolume }}</td>
            <td>{{ item.tradesCount24Hr }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </v-row>
  </section>
</template>
<script>
export default {
  name: "Markets",
  props: ["listMarkets"],
  data() {
    return {
      titles: [
        { name: "Exchange", type: "compareString", param: "deal" },
        { name: "Percent Volume", type: "compareString", param: "type_deal" },
        { name: "Volume Usd", type: "compareString", param: "price_deal" },
        {
          name: "Trading Pairs",
          type: "compareString",
          param: "quantity_deal",
        },
        {
          name: "Link to exchange",
          type: "compareString",
          param: "amount_deal",
        },
        { name: "Update time", type: "compareString", param: "date_deal" },
      ],
    };
  }
};
</script>

<style scoped></style>
