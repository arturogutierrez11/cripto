let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@trade")
let webs = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade")
//--------------- Bitcoin ------------------------------
let stockPrice = document.getElementById("stock-price")
let btc = document.getElementById("style-BTC")
let nameCoin = document.getElementById("name")
let buyBtc = document.getElementById("buyer-order")
let sellBtc = document.getElementById("seller-order")

//-----------------------------------------------------
//--------------- ETHER ------------------------------
let priceEth = document.getElementById("priceEth")
let nameEth = document.getElementById("nameEth")
let buyEth = document.getElementById("buyer-orderEth")
let sellEth = document.getElementById("seller-orderEth")




let lastprice = null
let laspriceEth = null

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    console.log(event)
     nameCoin.innerText = stockObject.s
     let price = parseFloat(stockObject.p).toFixed(2)
     stockPrice.innerText = price
     buyBtc.innerText= stockObject.b
     sellBtc.innerText = stockObject.a

   
    nameCoin.style.color = !lastprice || lastprice === price ? "black" : price > lastprice ? "green" : "red"
    stockPrice.style.color = !lastprice || lastprice === price ? "black" : price > lastprice ? "green" : "red"
    lastprice = price;
}
webs.onmessage = (event) => {
    let stockObject2 = JSON.parse(event.data)
    console.log(event)
     nameEth.innerText = stockObject2.s
     let price2 = parseFloat(stockObject2.p).toFixed(2)
     priceEth.innerText = price2
     
     buyEth.innerText= stockObject2.b
     sellEth.innerText = stockObject2.a

   
    nameEth.style.color = !laspriceEth || laspriceEth === price2 ? "black" : price2 > laspriceEth ? "green" : "red"
    priceEth.style.color = !laspriceEth || laspriceEth === price2 ? "black" : price2 > laspriceEth ? "green" : "red"
    laspriceEth = price2;
}