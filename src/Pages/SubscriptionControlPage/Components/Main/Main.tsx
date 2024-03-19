import './Main.scss';
import TopZone from './MainComponents/TopZone/TopZone';
import SubPayment from './MainComponents/SubPayment/SubPayment';

const Main = () => {
    return (
        <div className='mainPageDivFinalSubControl'>
            <div className='mainPageDivSubControl'>
                <TopZone />
                <SubPayment />
            </div>
        </div>
    );
};

export default Main;