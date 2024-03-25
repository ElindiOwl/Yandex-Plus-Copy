import './PaymentHistorySubscriptionPaymentOption.scss';
import PaymentsHistoryMap from './SubscriptionControlHistoryPage/PaymentHistoryMap/PaymentsHistoryMap';

const PaymentHistoryPaymentOption = () => {

    return (
        <div className='paymentHistorySubPayment'>
            <h2>История списаний</h2>
            <PaymentsHistoryMap displayCount={3} showDateHolder={false} />
            <a href='/subControlHistoryPage'>Посмотреть списания за полгода</a>
        </div>
    );
};

export default PaymentHistoryPaymentOption;