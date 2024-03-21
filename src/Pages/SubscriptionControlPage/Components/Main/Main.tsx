import './Main.scss';
import SubscriptionControlTextHeader
    from './MainComponents/SubscriptionControlTextHeader/SubscriptionControlTextHeader';
import SubscriptionPayment from './MainComponents/SubscriptionPayment/SubscriptionPayment';

const Main = () => {
    return (
        <div className='mainPageDivFinalSubControl'>
            <div className='mainPageDivSubControl'>
                <SubscriptionControlTextHeader />
                <SubscriptionPayment />
            </div>
        </div>
    );
};

export default Main;