import './PaymentMethodSubscriptionPONextPayment.scss';
import { usePaymentsHistory } from 'src/Entities/subscription/model/usePaymentsHistory';
import { getMonth } from 'src/Shared/lib/getMonth';
import NextPaymentInfo from '../PaymentMethodSubscriptionPOItem/PaymentMethodSubscriptionPOItem';
import plus3D from '../../../../../../assets/Images/YandexPlus3D.png';

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