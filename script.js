const data = require("./dummydata")

async function resetTickerCollection(db){
    for(var i = 0; i < data.length; i++){
        const newData= data[i]
        const newTicker = { polygonTicker: newData.ticker, tickerSymbol: newData.fake_ticker, name: newData.fake_name, oneDayData: [], theme: null}
        await db.collection("Ticker").insertOne(newTicker)
    }

    return 
}

module.exports = {
    resetTickerCollection
}