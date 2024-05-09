import './Change-Plan.scss';
import OneMonthSub from '../../../../Shared/assets/Images/Subscription-Page-Images/OneMonthSub.png';
import OneYearSub from '../../../../Shared/assets/Images/Subscription-Page-Images/OneYearSub.png';

const ChangePlan = () => {
    return (
        <div className='changePlanSubPayment'>
            <div className='oneMonthPlanSubPayment'>
                <img src={OneMonthSub} alt='One' height='40px' width='40px' />
                <h6>Яндекс Плюс</h6>
                <h5>299 ₽ в месяц</h5>
                <div>
                    <p>Активен</p>
                </div>
            </div>
            <div className='oneYearPlanSubPayment'>
                <img src={OneYearSub} alt='One' height='40px' width='40px' />
                <h6>Плюс Больше кино на год</h6>
                <h5>2 490 ₽ в первый год</h5>
                <div>
                    <p>-47%</p>
                </div>
                <h2 className='blankDivChangePlanSubPayment'></h2>
                <button className='oneYearPlanSubPaymentButton'>
                    Перейти
                </button>
            </div>
            <div className='enhancedOneMonthPlanSubPayment'>
                <img src={OneMonthSub} alt='One' height='40px' width='40px' />
                <h6>Плюс с Амедиатекой</h6>
                <h5>699 ₽ в месяц</h5>
                <h2 className='blankDivChangePlanSubPayment'></h2>
                <button className='enhancedOneMonthPlanSubPaymentButton'>
                    Перейти
                </button>
            </div>
        </div>
    );
};

export default ChangePlan;