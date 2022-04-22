import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import { Products } from './components/Products'

const stripeParams = loadStripe('pk_test_51KqgDmHgLGU2rQBoTi1lTNieXnrd5munOTyL0kpahO45lPK9VJqqQ3AFFHd8MAdNYyf8SFWB45oHz4PtVDCQPpRP00tgDaVatZ')

function App() {

  const options = {
    clientSecret: 'sk_test_51KqgDmHgLGU2rQBoxc9bJngFbW6qnwARurlsYk8HMF2GCvvLOMiHFNOCdmatXhVdRnOCiCxT39jQegt8eARmgZfn000ENkneTE'
  }

  return (
    <>
      <Elements stripe={stripeParams} options={options}>
        <Products/>
      </Elements>

    </>
  )
}

export default App
