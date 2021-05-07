const axios = require("axios");

export async function getMarketSumData(columns, period, products, date) {
    const columnsJoined = columns.join(",");
    const productsJoined = columns.join(",");
    const dateParsedLikeShit = date.from + "#" + date.to;

    const data = JSON.stringify({
        "columns": columnsJoined,
        "period": period,
        "product": productsJoined,
        "date": dateParsedLikeShit
    });
    const config = {
        headers: {
            'X-HTTP-Method-Override': 'GET',
            'Content-Type': 'application/json'
        }
    };
    return await axios.post("https://ec59280a-8bba-4ebf-92f2-2090baa68474.mock.pstmn.io", data, config);
}