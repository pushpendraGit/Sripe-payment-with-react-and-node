import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';


function App() {
  const [product, setProduct] = useState({
    name: 'Love',
    price: 10,
    productBy: 'Pushpendra'
  })

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      'Content-Type': 'application/json'
    }

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
      
    }).then(response => {
       console.log('RESPONCE', response)
     }).catch(error => console.log(error))
  }
  return (
    <div className="app">
    
       
      <div className='payment-btn-cobtainer'>
        <h5>Hii Payment By Pushpendra</h5>
        {/* TODO: Put your public key in 'stripeKey' gentated by 'stripe' */}
        <StripeCheckout
          stripeKey= ''
          token= {makePayment}
          amount ={product.price *100}
          name='By Love'
        ><button className="btn-large pink">By Love in 2021</button></StripeCheckout>
      </div>
    </div>
  );
}

export default App;
