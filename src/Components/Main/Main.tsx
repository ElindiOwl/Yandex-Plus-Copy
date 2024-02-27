import './Main.scss';
import FirstCard from './MainComponents/FirstCard/FirstCard';
import PlusIdeadCard from './MainComponents/PlusIdeasCard/PlusIdeasCard';

const Main = () => {
    return (
        <div className='mainPageDiv'>
            <FirstCard />
            <PlusIdeadCard />
        </div>
    );
};

export default Main;