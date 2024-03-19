import './Main.scss';
import FirstCard from './MainComponents/FirstCard/FirstCard';
import PlusIdeadCard from './MainComponents/PlusIdeasCard/PlusIdeasCard';
import NewInPlusCard from './MainComponents/NewInPlusCard/NewInPlusCard';
import KinoAndMusicCard from './MainComponents/KinoAndMusicCard/KinoAndMusicCard';
import CashBackCard from './MainComponents/CashBackCard/CashBackCard';
import QuestionsCard from './MainComponents/QuestionsCard/QuestionsCard';

const Main = () => {
    return (
        <div className='mainPageDiv'>
            <FirstCard />
            <PlusIdeadCard />
            <NewInPlusCard />
            <KinoAndMusicCard />
            <CashBackCard />
            <QuestionsCard />
        </div>
    );
};

export default Main;