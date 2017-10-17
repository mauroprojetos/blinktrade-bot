let BlinkTrade = require('blinktrade')
let BlinkTradeWS = BlinkTrade.BlinkTradeWS
let {
  createJSON,
  init,
  ErrorLog
} = require('./helpers')

require('dotenv').config()

let blinktrade = new BlinkTradeWS({ prod: true, brokerId: process.env.BROKERID })

async function onOrderBookNewOrder (data) {
  await createJSON(JSON.stringify(data))
}
async function onOrderBookUpdateOrder(data) {
  await createJSON(JSON.stringify(data))
}
async function onOrderBookDeleteOrder(data) {
  await createJSON(JSON.stringify(data))
}
async function onOrderBookDeleteThruOrder(data) {
  await createJSON(JSON.stringify(data))
}
async function onOrderBookTradeNew(data) {
  await createJSON(JSON.stringify(data))
}

blinktrade.connect({
  username: process.env.APIKEY,
  password: process.env.APIPASS
  })
  .then(function(){
    console.log(`Iniciado`)
    return init()
  })
  .then(function() {
    return blinktrade.subscribeOrderbook([process.env.SYMBOLSBTC])
    .on('OB:NEW_ORDER', onOrderBookNewOrder)
    .on('OB:UPDATE_ORDER', onOrderBookUpdateOrder)
    .on('OB:DELETE_ORDER', onOrderBookDeleteOrder)
    .on('OB:DELETE_ORDERS_THRU', onOrderBookDeleteThruOrder)
    .on('OB:TRADE_NEW', onOrderBookTradeNew)
  })
  .catch(function(err) {
    ErrorLog(err)
  })