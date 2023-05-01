import React from 'react'





function Payment(props) {
    const pay = () => {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    
        const paymentData = {
    
          "api_username": "e36eb40f5ec87fa2",
          "account_name": "EUR3D1",
          "amount": props.sum,
          "order_reference": Math.random() * 999999, //map.random - juhuliku numbri generaator 0-9
          "nonce": "asd123456sdfgh23" + Math.random * 999999 + new Date(), // igakord unikaalne
          "timestamp": new Date(), // praegune aeg
          "customer_url": "https://webshop-be51b.web.app"
    
    
        };
    
        const paymentHeaders = {
          "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
          "Content-Type": "application/json"
        };
    
        fetch(url, { "method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders }) //headers - sisselogimise tunnused, bodys - tooted
          .then(res => res.json())
          .then(json => window.location.href = json.payment_link)
    
        // windows.location.href --> tähendab välisele rakendusele suunamist
        //navigate ("/") <-- raksenduse seseselt JavaScriptis
        // <Link to="""> <---HTMLs
      }

  return (
    <button onClick={pay}>Pay</button>
  )
}

export default Payment