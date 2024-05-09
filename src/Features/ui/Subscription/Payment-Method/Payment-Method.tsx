import './Payment-Method.scss';
import NextPayment from 'src/Entities/subscription/ui/Next-Payment/Next-Payment.tsx';


const PaymentMethod = () => {

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

export default PaymentMethod;

