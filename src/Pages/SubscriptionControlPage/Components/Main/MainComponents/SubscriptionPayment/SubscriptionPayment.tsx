import React, { useState } from 'react';
import './SubscriptionPayment.scss';
import ChangePlanSubscriptionPaymentOption
    from './SubscriptionPaymentOptions/ChangePlanSubscriptionPaymentOption/ChangePlanSubscriptionPaymentOption';
import PaymentHistoryPaymentOption
    from './SubscriptionPaymentOptions/PaymentHistorySubscriptionPaymentOption/PaymentHistorySubscriptionPaymentOption';
import PaymentMethodSubscriptionPaymentOption
    from './SubscriptionPaymentOptions/PaymentMethodSubscriptionPaymentOption/PaymentMethodSubscriptionPaymentOption';

const SubscriptionPayment = () => {
    const [activeOption, setActiveOption] = useState('changePlan');

    const handleToggleOption = (option) => {
        setActiveOption(activeOption === option ? null : option);
    };

    return (
        <>
            <div className='subPaymentDivSubControl'>
                <div>
                    <div className='textAreaSubPayment'>
                        <h2>299 ₽</h2>
                        <p>Спишется 16 марта</p>
                    </div>
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
};

export default SubscriptionPayment;
