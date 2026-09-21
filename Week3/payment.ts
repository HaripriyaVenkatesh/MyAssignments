type PaymentMethod = "UPI" | "CreditCard" | "PayPal"

function makePayment(pMethod: PaymentMethod) {
    
    if (pMethod === 'CreditCard'){
        console.log("Payment done on Credit Card")
    }

    else if (pMethod === 'PayPal'){
        console.log("Payment done on Credit Card")
    }

    else if (pMethod === 'UPI'){
        console.log("Payment done on UPI")
    }

    else {
        console.log("Incorrect Payment Method")
    }

}
makePayment("UPI")