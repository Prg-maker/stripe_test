import express, { response } from 'express'
import Stripe from 'stripe'
import StripeConfig from './config/stripe'
const server = express()
server.use(express.static('public'));

const PORT  = 'http://localhost:4000'


const stripe = new Stripe(StripeConfig.secretKey , {
  apiVersion: '2020-08-27'
})


server.post('/create-checkout-session' , async (req , res)=> {
  console.log('aqui')

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1Kr7vUHgLGU2rQBo7EXtQAfe',
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${PORT}?success=true`,
    cancel_url: `${PORT}?canceled=true`
  })
  const a = session.url  as string
  return res.redirect(a)
})


server.listen(4000 , ()=> console.log('sever is running'))
