let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@trade")
let webs = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade")
//--------------- Bitcoin ------------------------------
let stockPrice = document.getElementById("stock-price")
let btc = document.getElementById("style-BTC")
let nameCoin = document.getElementById("name")
//-----------------------------------------------------

let priceEth = document.getElementById("priceEth")
let nameEth = document.getElementById("nameEth")



let lastprice = null
let laspriceEth = null

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    console.log(event)
     nameCoin.innerText = stockObject.s
     let price = stockObject.p
     stockPrice.innerText = price
   
    
    stockPrice.style.color = !lastprice || lastprice === price ? "black" : price > lastprice ? "green" : "red"
    lastprice = price;
}
webs.onmessage = (event) => {
    let stockObject2 = JSON.parse(event.data)
    console.log(event)
     nameEth.innerText = stockObject2.s
     let price2 = stockObject2.p
     priceEth.innerText = price2
   
   
    priceEth.style.color = !laspriceEth || laspriceEth === price2 ? "black" : price2 > laspriceEth ? "green" : "red"
    laspriceEth = price2;
}