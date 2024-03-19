import React, { useState } from 'react';
import './SubPayment.scss';
import ChangePlanSubPaymentOption from './SubPaymentOptions/ChangePlanSubPaymentOption/ChangePlanSubPaymentOption';
import PaymentHistoryPaymentOption
    from './SubPaymentOptions/PaymentHistorySubPaymentOption/PaymentHistorySubPaymentOption';
import PaymentMethodSubPaymentOption
    from './SubPaymentOptions/PaymentMethodSubPaymentOption/PaymentMethodSubPaymentOption';

const SubPayment = () => {
    const [activeOption, setActiveOption] = useState(null);

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
                {activeOption === 'changePlan' && <ChangePlanSubPaymentOption />}
            </div>
            <div className={`subPaymentOption ${activeOption === 'paymentHistory' ? 'active' : ''}`}>
                {activeOption === 'paymentHistory' && <PaymentHistoryPaymentOption />}
            </div>
            <div className={`subPaymentOption ${activeOption === 'paymentMethod' ? 'active' : ''}`}>
                {activeOption === 'paymentMethod' && <PaymentMethodSubPaymentOption />}
            </div>
        </>
    );
};

export default SubPayment;
