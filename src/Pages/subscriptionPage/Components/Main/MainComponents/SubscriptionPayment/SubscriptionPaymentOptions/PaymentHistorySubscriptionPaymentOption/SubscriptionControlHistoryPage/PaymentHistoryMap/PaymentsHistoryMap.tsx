import './PaymentsHistoryMap.scss';
import { getMonth } from 'src/Shared/lib/getMonth';
import { usePaymentsHistory } from 'src/Entities/subscription/model/Use-Payments-History';
import { getNominativeCaseMonth } from 'src/Shared/lib/getNominativeCaseMonth';
import Payment
    from 'src/Pages/subscriptionPage/Components/Main/MainComponents/SubscriptionPayment/SubscriptionPaymentOptions/PaymentHistorySubscriptionPaymentOption/PaymentHistoryList/PaymentHistoryList';

interface PaymentItemProps {
    paymentDate: string;
    subscriptionName: string;
    subscriptionPrice: number;
    subscriptionImg: string;
}

interface PaymentsHistoryMapProps {
    displayCount?: number;
    showDateHolder?: boolean;
}

const PaymentsHistoryMap: React.FC<PaymentsHistoryMapProps> = ({ displayCount, showDateHolder = true }) => {
    const paymentsHistory: PaymentItemProps[] = usePaymentsHistory();

    const limitedPayments = displayCount ? paymentsHistory.slice(0, displayCount) : paymentsHistory;

    const groupedPayments: { [key: string]: PaymentItemProps[] } = limitedPayments.reduce((acc: { [key: string]: PaymentItemProps[] }, payment) => {
        const date = new Date(payment.paymentDate);
        const monthYearKey = `${date.getMonth()}-${date.getFullYear()}`;
        acc[monthYearKey] = acc[monthYearKey] || [];
        acc[monthYearKey].push(payment);
        return acc;
    }, {});

    const paymentsByMonth = Object.values(groupedPayments);

    return (
        <>
            {paymentsByMonth.map((paymentsInMonth: PaymentItemProps[]) => {
                const date = new Date(paymentsInMonth[0].paymentDate);
                const month = getMonth(date);
                const nominativeCaseMonth = getNominativeCaseMonth(date);
                const displayYear = date.getFullYear() === new Date().getFullYear() ? '' : `${date.getFullYear()}`;
                return (
                    <div key={date.toString()}>
                        {showDateHolder && (
                            <p className='dateHolder'>
                                {nominativeCaseMonth} {displayYear}
                            </p>
                        )}
                        {paymentsInMonth.map((payment: PaymentItemProps, paymentIndex: number) => {
                            const paymentDate = new Date(payment.paymentDate);
                            return (
                                <Payment
                                    key={paymentIndex}
                                    name={payment.subscriptionName}
                                    date={`${paymentDate.getDate()} ${month}`}
                                    price={payment.subscriptionPrice}
                                    img={payment.subscriptionImg}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default PaymentsHistoryMap;
