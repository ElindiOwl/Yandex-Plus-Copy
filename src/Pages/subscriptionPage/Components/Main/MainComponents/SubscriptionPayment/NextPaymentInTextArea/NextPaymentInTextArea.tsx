import './NextPaymentInTextArea.scss';
import { PaymentDataProps } from 'src/Entities/subscription/model/PaymentDataTypes';

const NextPaymentInTextArea = (NextPaymentInTextAreaDataProps: PaymentDataProps) => {
    return (
        <div className='textAreaSubPayment'>
            <h5>{NextPaymentInTextAreaDataProps.price} ₽</h5>
            <p>Спишется {NextPaymentInTextAreaDataProps.date}</p>
        </div>
    );
};

export default NextPaymentInTextArea;