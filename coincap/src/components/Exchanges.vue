<template>
  <section>
    <v-row no-gutters class="w-100">
      <h1>List of Exchanges</h1>
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
            <tr v-for="item in listExchanges" :key="item.length">
              <td>{{ item.name }}</td>
              <td>{{ item.percentTotalVolume }}</td>
              <td>{{ item.volumeUsd }}</td>
              <td>{{ item.tradingPairs }}</td>
              <td><a :href="item.exchangeUrl">{{ item.exchangeUrl }}</a></td>
              <td>{{ item.update }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-row>
  </section>
</template>

<script>

export default {
  name: "Exchanges",
  props: ["listExchanges"],
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
          name: "Link to exchangeUrl",
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
