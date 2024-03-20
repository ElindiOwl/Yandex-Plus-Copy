import React, { useState } from 'react';
import yandexPlus from '../../../../../../assets/Images/YandexPlus.png';
import Payment from '../PaymentHistorySubPaymentOptionPaymentsList/PaymentHistorySubPaymentOptionPaymentsList';

interface PaymentsHistoryMapProps {
    displayCount?: number;
}


const PaymentsHistoryMap: React.FC<PaymentsHistoryMapProps> = ({ displayCount }) => {

    const [paymentsHistory, setPaymentsHistory] = useState([
        {
            subscriptionName: 'Яндекс Плюс',
            paymentDate: '2023-02-16',
            subscriptionPrice: '299₽',
            subscriptionImg: yandexPlus,
        },
        {
            subscriptionName: 'Яндекс Плюс',
            paymentDate: '2024-01-16',
            subscriptionPrice: '299₽',
            subscriptionImg: yandexPlus,
        },
        {
            subscriptionName: 'Яндекс Плюс',
            paymentDate: '2023-12-16',
            subscriptionPrice: '299₽',
            subscriptionImg: yandexPlus,
        },
        {
            subscriptionName: 'Яндекс Плюс',
            paymentDate: '2023-11-16',
            subscriptionPrice: '299₽',
            subscriptionImg: yandexPlus,
        },
        {
            subscriptionName: 'Яндекс Плюс',
            paymentDate: '2023-10-16',
            subscriptionPrice: '299₽',
            subscriptionImg: yandexPlus,
        },
        {
            subscriptionName: 'Яндекс Плюс',
            paymentDate: '2023-9-16',
            subscriptionPrice: '299₽',
            subscriptionImg: yandexPlus,
        },
    ]);

    const limitedPayments = displayCount ? paymentsHistory.slice(0, displayCount) : paymentsHistory;

    const getRussianMonth = (date) => {
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
        ];
        return months[date.getMonth()];
    };

    return (
        <div>
            {limitedPayments.map((payment, index) => {
                const date = new Date(payment.paymentDate);
                const day = date.getDate();
                const month = getRussianMonth(date);
                return (
                    <Payment
                        key={index}
                        name={payment.subscriptionName}
                        date={`${day} ${month}`}
                        price={payment.subscriptionPrice}
                        img={payment.subscriptionImg}
                    />
                );
            })}
        </div>
    );
};

export default PaymentsHistoryMap;


