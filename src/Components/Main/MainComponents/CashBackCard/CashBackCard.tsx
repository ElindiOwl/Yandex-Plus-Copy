import './CashBackCard.scss';
import AboutCashBackCard from './AboutCashBackCard/AboutCashBackCard';
import HowToGetPointsCard from './HowToGetPointsCard/HowToGetPointsCard';
import HowToSpendPointsCard from './HowToSpendPointsCard/HowToSpendPointsCard';

const CashBackCard = () => {
    return (
        <div className='PointsCardDiv'>
            <AboutCashBackCard />
            <HowToGetPointsCard />
            <HowToSpendPointsCard />
        </div>
    );
};

export default CashBackCard;