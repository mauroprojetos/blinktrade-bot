let BlinkTrade = require('blinktrade')
let BlinkTradeWS = BlinkTrade.BlinkTradeWS
require('dotenv').config()

let blinktrade = new BlinkTradeWS({ prod: true, brokerId: process.env.BROKERID })

function onOrderBookNewOrder(data) {
  console.log('OB:NEW_ORDER', data)
}
function onOrderBookUpdateOrder(data) {
  console.log('OB:UPDATE_ORDER', data)
}
function onOrderBookDeleteOrder(data) {
  console.log('OB:DELETE_ORDER', data)
}
function onOrderBookDeleteThruOrder(data) {
  console.log('OB:DELETE_ORDERS_THRU', data)
}
function onOrderBookTradeNew(data) {
  console.log('OB:TRADE_NEW', data)
}


blinktrade.connect({
  username: process.env.APIKEY,
  password: process.env.APIPASS
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
    console.log(err)
  })