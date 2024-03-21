import './PaymentsHistoryMap.scss';
import Payment
    from '../../PaymentHistoryList/PaymentHistoryList';
import { getMonth } from '../../../../../../../../../../Shared/lib/getMonth';
import { usePaymentsHistory } from '../../../../../../../../../../Entities/Subscription/model/usePaymentsHistory';

interface PaymentsHistoryMapProps {
    displayCount?: number;
    showDateHolder?: boolean;
}


const PaymentsHistoryMap: React.FC<PaymentsHistoryMapProps> = ({ displayCount, showDateHolder = true }) => {

    const paymentsHistory = usePaymentsHistory();


    const limitedPayments = displayCount ? paymentsHistory.slice(0, displayCount) : paymentsHistory;


    return (
        limitedPayments.map((payment, index) => {
            const date = new Date(payment.paymentDate);
            const day = date.getDate();
            const month = getMonth(date);
            const year = date.getFullYear();
            const currentYear = new Date().getFullYear();
            const displayYear = year === currentYear ? '' : `${year}`;
            return (
                <div>
                    {showDateHolder &&
                        <p className='dateHolder'>
                            {month} {displayYear}
                        </p>
                    }
                    <Payment
                        key={index}
                        name={payment.subscriptionName}
                        date={`${day} ${month}`}
                        price={payment.subscriptionPrice}
                        img={payment.subscriptionImg}
                    />
                </div>
            );
        })
    );
};

export default PaymentsHistoryMap;


