const axios = require("axios");

export async function getMarketSumData(columns, period, products, date) {
    const columnsJoined = columns.join(",");
    const productsJoined = columns.join(",");
    const dateParsedLikeShit = formatDate(date.startDate) + "#" + formatDate(date.endDate);

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

export function formatDate(date) {
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return [date.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('');
}