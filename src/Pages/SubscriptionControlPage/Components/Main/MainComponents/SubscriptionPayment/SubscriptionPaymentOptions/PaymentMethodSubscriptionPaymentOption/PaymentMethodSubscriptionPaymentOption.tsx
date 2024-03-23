import './PaymentMethodSubscriptionPaymentOption.scss';
import NextPayment from './PaymentMethodSubscriptionPONextPayment/PaymentMethodSubscriptionPONextPayment';


const PaymentMethodSubscriptionPaymentOption = () => {

    return (
        <div className='paymentMethodSubPayment'>
            <div className='cardListSubPayment'>
                <p>puck</p>
            </div>
            <div className='activatedSubPayment'>
                <NextPayment displayCount={1} />
            </div>
        </div>
    );
};

export default PaymentMethodSubscriptionPaymentOption;

