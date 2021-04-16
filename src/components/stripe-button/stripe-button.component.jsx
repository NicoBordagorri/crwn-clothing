import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = 'pk_test_51IgskVLYs7QLAbANEFoFcF8iA5ckjROlto3xRMSe1XCcnRPxThQSIrWfedQXO5bC4KN01sNqbr0sAI7DWa8fbovf00m4VrSP5P'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
       
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton