import './Main.scss';
import FirstCard from './MainComponents/FirstCard/FirstCard';
import PlusIdeadCard from './MainComponents/PlusIdeasCard/PlusIdeasCard';
import NewInPlusCard from './MainComponents/NewInPlusCard/NewInPlusCard';

const Main = () => {
    return (
        <div className='mainPageDiv'>
            <FirstCard />
            <PlusIdeadCard />
            <NewInPlusCard />
        </div>
    );
};

export default Main;