import './Payment-History.scss';
import PaymentsHistoryMap from 'src/Entities/subscription/ui/Payments-History-Map/Payments-History-Map.tsx';

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