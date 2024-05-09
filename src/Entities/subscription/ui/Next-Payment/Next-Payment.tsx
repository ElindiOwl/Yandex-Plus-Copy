import './Next-Payment.scss';
import { usePaymentsHistory } from 'src/Entities/subscription/model/Use-Payments-History.ts';
import { getMonth } from 'src/Shared/lib/getMonth.tsx';
import NextPaymentInfo
    from 'src/Entities/subscription/model/Payment-Option-Item/Payment-Option-Item.tsx';
import plus3D from '../../../../Shared/assets/Images/Subscription-Page-Images/YandexPlus3D.png';

interface NextPaymentMapProps {
    displayCount?: number;
}

const NextPayment: React.FC<NextPaymentMapProps> = ({ displayCount }) => {

    const nextSubscriptionChoice = usePaymentsHistory();

    const limitedPayments = displayCount ? nextSubscriptionChoice.slice(0, displayCount) : nextSubscriptionChoice;

    return (
        limitedPayments.map((payment) => {
            const date = new Date(payment.paymentDate);
            date.setMonth(date.getMonth() + 1);
            const day = date.getDate();
            const month = getMonth(date);
            return (
                <>
                    <div className='nextPaymentHeaderText'>
                        <h6>Вы подключили</h6>
                        <p>Дата списания {`${day} ${month}`}</p>
                    </div>
                    <div>
                        <NextPaymentInfo
                            name={payment.subscriptionName}
                            price={payment.subscriptionPrice}
                            img={plus3D}
                        />
                    </div>
                </>
            );
        })
    );
};

export default NextPayment;