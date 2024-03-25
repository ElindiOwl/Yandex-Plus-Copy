import React, { useState } from 'react';
import './SubscriptionPayment.scss';
import ChangePlanSubscriptionPaymentOption
    from './SubscriptionPaymentOptions/ChangePlanSubscriptionPaymentOption/ChangePlanSubscriptionPaymentOption';
import PaymentHistoryPaymentOption
    from './SubscriptionPaymentOptions/PaymentHistorySubscriptionPaymentOption/PaymentHistorySubscriptionPaymentOption';
import PaymentMethodSubscriptionPaymentOption
    from './SubscriptionPaymentOptions/PaymentMethodSubscriptionPaymentOption/PaymentMethodSubscriptionPaymentOption';
import { usePaymentsHistory } from 'src/Entities/subscription/model/Use-Payments-History';
import NextPaymentInTextArea from './NextPaymentInTextArea/NextPaymentInTextArea';
import { getMonth } from 'src/Shared/lib/getMonth';

interface NextPaymentMapProps {
    displayCount?: number;
    option?: string;
}

const SubscriptionPayment: React.FC<NextPaymentMapProps> = ({ displayCount, option }) => {
    const [activeOption, setActiveOption] = useState(option || 'changePlan' || null);

    const handleToggleOption = (option: string) => {
        setActiveOption(activeOption === option ? null : option);
    };

    const nextPaymentInfo = usePaymentsHistory();

    const limitedPayments = displayCount ? nextPaymentInfo.slice(0, displayCount) : nextPaymentInfo;

    return (
        limitedPayments.map((payment) => {
                const date = new Date(payment.paymentDate);
                date.setMonth(date.getMonth() + 1);
                const day = date.getDate();
                const month = getMonth(date);
                return (
                    <>
                        <div className='subPaymentDivSubControl'>
                            <div>
                                <NextPaymentInTextArea
                                    price={payment.subscriptionPrice}
                                    date={`${day} ${month}`}
                                />
                                <div className='buttonsSubPaymentsControl'>
                                    <button
                                        onClick={() => handleToggleOption('changePlan')}
                                        className={activeOption === 'changePlan' ? 'activeButton' : 'inactiveButton'}
                                    >
                                        Сменить план
                                    </button>
                                    <button
                                        onClick={() => handleToggleOption('paymentHistory')}
                                        className={activeOption === 'paymentHistory' ? 'activeButton' : 'inactiveButton'}
                                    >
                                        История списаний
                                    </button>
                                    <button
                                        onClick={() => handleToggleOption('paymentMethod')}
                                        className={activeOption === 'paymentMethod' ? 'activeButton' : 'inactiveButton'}
                                    >
                                        Способ оплаты
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className={`subPaymentOption ${activeOption === 'changePlan' ? 'active' : ''}`}>
                            {activeOption === 'changePlan' && <ChangePlanSubscriptionPaymentOption />}
                        </div>
                        <div className={`subPaymentOption ${activeOption === 'paymentHistory' ? 'active' : ''}`}>
                            {activeOption === 'paymentHistory' && <PaymentHistoryPaymentOption />}
                        </div>
                        <div className={`subPaymentOption ${activeOption === 'paymentMethod' ? 'active' : ''}`}>
                            {activeOption === 'paymentMethod' && <PaymentMethodSubscriptionPaymentOption />}
                        </div>
                    </>
                );
            },
        ));

};

export default SubscriptionPayment;
