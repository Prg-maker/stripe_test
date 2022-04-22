import Stripe from 'stripe'
import {useState , useEffect} from 'react'

export function Products(){

  

  return(
    <form>
      <section>
          <div className="product">
            <img
              src="https://i.imgur.com/EHyR2nP.png"
              alt="The cover of Stubborn Attachments"
            />
            <div className="description">
            <h3>Stubborn Attachments</h3>
            <h5>$20.00</h5>
            </div>
          </div>
          <form action="http://localhost:4000/create-checkout-session" method="post">
            <button type="submit">
              Checkout
            </button>
          </form>
        </section>
    </form>
  )
}

interface Props {
  message: string
}

const Message = ({message}:Props ) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <Products />
  );
}