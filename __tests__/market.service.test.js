import { getMarketSumData } from "@/service/market.js";
const axios = require("axios");
import { marketResponse } from "./marketResponse.js";

test("Should get market information", async () => {
  axios.defaults.baseURL = "https://ec59280a-8bba-4ebf-92f2-2090baa68474.mock.pstmn.io";

  const colums = ["lots_total", "net_total", "cost_total", "rebate_total"];
  const period = "daily";
  const products = ["CMX HG COPPER", "CMX SILVER" , "CMX GOLD", "ICUS COTTON", "ICE US COFFEE", "CBOT MINI DOW", "EURX EURO-BOBL", "CBT CORN", "ICEUS FCOJ-A"];
  const date = {
    startDate: new Date(2020, 8, 2),
    endDate: new Date(2020, 8, 30)
  };

  const response = await getMarketSumData(colums, period, products, date);

  expect(response.data).toEqual(marketResponse);
});