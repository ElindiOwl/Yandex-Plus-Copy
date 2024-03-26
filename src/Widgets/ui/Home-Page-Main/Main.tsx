import './Main.scss';
import Questions from './Main-Components/QuestionsCard/QuestionsCard';
import { AdvertisingCardSet } from 'src/Widgets/ui/Advertising-Card-Set/Advertising-Card-Set';

const Main = () => {
    return (
        <div className='mainPageDiv'>
            <AdvertisingCardSet />
            <Questions />
        </div>
    );
};

export default Main;