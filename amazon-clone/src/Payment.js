import React from 'react'
import {useState, useEffect} from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { Link, history } from "react-router-dom";
import {CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from './axios.js'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

        // Variables declaration in react types
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [clientSecret, setClientSecret ] = useState(true);

    useEffect(()=>{

        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () =>{
            // axios is used to make get/post requests
            const response = await axios({
                method: 'POST',
                // Stripe expects the total in a currencies subunit
                url: `/payments/create?total=${getCartTotal(basket)*100}`
            })
        } 
        getClientSecret();
    },[basket])

    const handleSubmit = async (event) => {
        // do all the stripe stuff
        event.preventDefault();
        // prevents user from clicking the button multiple times while payment is processing
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })

        // const payload = await stripe
    }

    const handleChange = e => {
        // Listens for any changes in the CardElement 
        // and display any errors as the user types in their card details
        setDisabled(e.empty);
        setError(e.error? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout(
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                    </h1>
                </div>
                {/* Payment section - delivery address */}
                <div className="payment__section">
                  <div className="payment__title">
                      <h3>Delivery Address</h3>
                      
                  </div>
                  <div className="payment__address">
                      {/* Optional chaining to prevent app crashes if no user is present */}
                      <p>{user?.email}</p>
                      <p>123 ABC Apartments, Bengaluru</p>
                      <p>Karnataka, India</p>
                  </div>
                </div>

                {/* Payment section - review items */}
                <div className="payment__section">
                
                    <div className="payment__title">
                    <h3>Review items for delivery</h3>
                    </div>
                    <div className="payment__items">
                        
                        {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}

                    </div>
                  
                  </div>   

                {/* Payment section - payment method */}
                  <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                                {/* Stripe magic will happen here */}
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange}/>
                                    <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                        <>
                                            <p>
                                            Order Total ({basket?.length} items):
                                            <strong>{value}</strong>
                                            </p>            
                                        </>
                                        )}
                                        decimalScale={2}
                                        value={getCartTotal(basket)} /* Part of the homework*/
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    >
                                        </CurrencyFormat>
                                        <button disabled={processing || disabled || succeeded}>
                                            <span>{processing? <p>Processing</p>: "Buy Now"}</span>
                                        </button>
                                    </div>
                                </form>
                                {/* Display Errors */}
                                {error && <div>{error}</div>}
                                
                        </div>
                  </div>
           
            

            
        </div>
    )
}

export default Payment
