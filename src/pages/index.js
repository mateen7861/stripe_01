import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { Button } from '@material-ui/core'

const stripePromise = loadStripe("pk_test_51HQVBBENGDrlrEfpW5xJCgMyieR7Zl63bKKBLnfuzh7WiZVDp6HZUcezWkCv88EBCQBNDK69yc69XF6T7Tf4a2lt001IT7ZhZb")
const Index = () => {
  const redirectToCheckout = async () => {
    const stripe = await stripePromise
    const result = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1HiNzaENGDrlrEfpPdV55AKQ", quantity: 2 }],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/failed"
    })

  }
  return (
    <div>
      <Button onClick={redirectToCheckout} color="primary" variant="contained">
        Checkout
      </Button>
    </div>
  )
}

export default Index
