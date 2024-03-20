import './PaymentHistorySubPaymentOption.scss';
import PaymentsHistoryMap from './SubControlHistoryPage/PaymentsHistoryMap';

const PaymentHistoryPaymentOption = () => {

    return (
        <div className='paymentHistorySubPayment'>
            <h2>История списаний</h2>
            <PaymentsHistoryMap displayCount={3} />
            <a href='/subControlHistoryPage'>Посмотреть списания за полгода</a>
        </div>
    );
};

export default PaymentHistoryPaymentOption;