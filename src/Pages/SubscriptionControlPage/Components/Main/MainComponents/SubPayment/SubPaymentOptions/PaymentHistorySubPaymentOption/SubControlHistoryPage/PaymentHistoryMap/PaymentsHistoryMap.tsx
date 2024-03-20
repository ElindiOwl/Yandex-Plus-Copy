import Payment from '../../PaymentHistorySubPaymentOptionPaymentsList/PaymentHistorySubPaymentOptionPaymentsList';
import { getMonth } from '../../../../../../../../../../Shared/lib/getMonth';
import { usePaymentsHistory } from '../../../../../../../../../../Entities/Subscription/model/usePaymentsHistory';

interface PaymentsHistoryMapProps {
    displayCount?: number;
}


const PaymentsHistoryMap: React.FC<PaymentsHistoryMapProps> = ({ displayCount }) => {

    const paymentsHistory = usePaymentsHistory();


    const limitedPayments = displayCount ? paymentsHistory.slice(0, displayCount) : paymentsHistory;


    return (
        limitedPayments.map((payment, index) => {
            const date = new Date(payment.paymentDate);
            const day = date.getDate();
            const month = getMonth(date);
            return (
                <Payment
                    key={index}
                    name={payment.subscriptionName}
                    date={`${day} ${month}`}
                    price={payment.subscriptionPrice}
                    img={payment.subscriptionImg}
                />
            );
        })
    );
};

export default PaymentsHistoryMap;


