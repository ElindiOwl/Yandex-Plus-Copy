import './Main.scss';
import FirstCard from './MainComponents/FirstCard/FirstCard';
import PlusIdeasCard from './MainComponents/PlusIdeasCard/PlusIdeasCard';
import NewInPlusCard from './MainComponents/NewInPlusCard/NewInPlusCard';
import KinoAndMusicCard from './MainComponents/KinoAndMusicCard/KinoAndMusicCard';
import CashBackCard from './MainComponents/CashBackCard/CashBackCard';
import QuestionsCard from './MainComponents/QuestionsCard/QuestionsCard';
import PlusIdeasCard2 from 'src/Widgets/ui/Home-Page-Main/MainComponents/Plus-Ideas-Card2/Plus-Ideas-Card2';

const Main = () => {
    return (
        <div className='mainPageDiv'>
            <FirstCard />
            <PlusIdeasCard />
            <PlusIdeasCard2 itemsToSlide={1} />
            <NewInPlusCard />
            <KinoAndMusicCard />
            <CashBackCard />
            <QuestionsCard />
        </div>
    );
};

export default Main;